import React from "react";
import toast from "react-hot-toast";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/Authprovider/Authprovider";
import { useState } from "react";
import useToken from "../../hooks/Usetoken";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signup, updateUser } = useContext(Authcontext);
  const [signuperror, setsignuperror] = useState("");
  const [createdemail, setcreatedEmail] = useState("");
  const [token] = useToken(createdemail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }
  const hadlesingup = (data) => {
    setsignuperror("");
    signup(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user create successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            sakibuser(data.name, user.email);
          })

          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setsignuperror(error.message);
      });
  };

  const sakibuser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcreatedEmail(email);
        console.log({ setcreatedEmail: email });
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-8">
        <h1 className="text-3xl mb-10 font-semibold text-center">SIGNUP</h1>
        <form onSubmit={handleSubmit(hadlesingup)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold">Name:</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "name is required" })}
              className="input input-bordered"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold">Email:</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "email is required" })}
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text  text-2xl font-semibold">
                Password:
              </span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: { value: 6, message: "atleast 6 characters" },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,

                  message: "password strong",
                },
              })}
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full text-white"
            value="Sign Up"
          />
          <div>
            {signuperror && (
              <p className="text-red-600" role="alert">
                {signuperror}
              </p>
            )}
          </div>
        </form>
        <p>
          Already have an account?
          <Link className="text text-secondary font-semibold" to={"/login"}>
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Signup;
