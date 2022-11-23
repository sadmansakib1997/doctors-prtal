import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "../../Shared/Confirmmodal/ConfirmModal";
import LOading from "../../Shared/LOading/LOading";

const Managedoctor = () => {
  const [deleteingDoctor, setDeletingdoctor] = useState(null);

  const canclemodal = () => {
    setDeletingdoctor(null);
  };

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  const handledeletedoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast.success(`Deleted ${doctor.name} successfully`);
        }
      });
  };

  if (isLoading) {
    return <LOading></LOading>;
  }
  return (
    <div>
      <h2 className="text-3xl">Manage Doctor:{doctors?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avator</th>
              <th>Name</th>
              <th>Email</th>
              <th>Speaciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12">
                      <img src={doctor.photo} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.Speciality}</td>
                <td>
                  <label
                    onClick={() => setDeletingdoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-outline btn-sm btn-error mr-7"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {deleteingDoctor && (
          <ConfirmModal
            title={`Are you sure you want to delete`}
            message={`if you delete ${deleteingDoctor.name} it cant be undone`}
            canclemodal={canclemodal}
            successaction={handledeletedoctor}
            successbtnName="delete"
            modaldata={deleteingDoctor}
          ></ConfirmModal>
        )}
      </div>
    </div>
  );
};

export default Managedoctor;
