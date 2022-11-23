import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/Authprovider/Authprovider";
import Usetoken from "../../hooks/Usetoken";

const Login = () => {
  const { login } = useContext(Authcontext);
  const [loginerror, setloginerror] = useState("");
  const [loginuseremail, setloginuseremail] = useState("");
  const [token] = Usetoken(loginuseremail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pahtname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setloginerror("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setloginuseremail(data.email);
      })
      .catch((error) => {
        console.error(error);
        setloginerror(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-8">
        <h1 className="text-3xl mb-10 font-semibold text-center">LOGIN</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold">Email:</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  text-2xl font-semibold">
                Password:
              </span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              })}
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forgot Password?</span>
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full text-white"
            value="Login"
          />
          <div>
            {loginerror && (
              <p className="text-red-600" role="alert">
                {loginerror}
              </p>
            )}
          </div>
        </form>
        <p>
          New to Doctors Portal?
          <Link className="text text-secondary font-semibold" to={"/signup"}>
            Create an account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
