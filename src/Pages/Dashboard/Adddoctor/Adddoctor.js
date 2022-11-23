import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LOading from "../../Shared/LOading/LOading";

const Adddoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostkey = process.env.REACT_APP_IMGBB_KEY;
  const navigate = useNavigate();

  const { data: specialities, isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentspeciality");
      const data = await res.json();
      return data;
    },
  });

  const handleaddDoctor = (data) => {
    const photo = data.photo[0];
    const formData = new FormData();
    formData.append("image", photo);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        if (imgdata.success) {
          console.log(imgdata.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            Speciality: data.Speciality,
            photo: imgdata.data.url,
          };
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accesstoken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} you are so beautiful`);
              navigate("/dash/managedoctor");
            });
        }
      });
  };

  if (isLoading) {
    return <LOading></LOading>;
  }

  return (
    <div className="w-96 p-8">
      <h1>Add Doctor</h1>
      <form onSubmit={handleSubmit(handleaddDoctor)}>
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
              Speciality:
            </span>
          </label>
          <select
            {...register("Speciality")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Pick a spaciality
            </option>
            {specialities.map((speaciality) => (
              <option key={speaciality._id} value={speaciality.name}>
                {speaciality.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-2xl font-semibold">Photo:</span>
          </label>
          <input
            type="file"
            {...register("photo", { required: "photo is required" })}
            className="input input-bordered"
          />
          {errors.photo && (
            <p className="text-red-600" role="alert">
              {errors.photo?.message}
            </p>
          )}
        </div>

        <input
          type="submit"
          className="btn btn-accent w-full mt-5 text-white"
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default Adddoctor;
