import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import swal from "sweetalert";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [remeaning, setRemeaning] = useState(null);

  useEffect(() => {
    fetch("https://enigmatic-cliffs-59575.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [remeaning]);

  const handleDeleteBtn = (id) => {
    axios
      .delete(`https://enigmatic-cliffs-59575.herokuapp.com/orders/${id}`)
      .then(function (response) {
        if (response.data.deletedCount > 0) {
          swal({
            title: "Are you sure?",
            text: "delete for this order item",
            icon: "warning",
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              swal({
                title: "Deleted!",
                text: "Deleted Successfully!",
                icon: "success",
              });
              const remeaning = orders.filter((pd) => pd._id !== id);
              setOrders(remeaning);
            }
          });
        }
      });
  };

  const handleUpdateBtn = (id) => {
    axios
      .put(`https://enigmatic-cliffs-59575.herokuapp.com/orders/${id}`)
      .then(function (response) {
        if (response.data.modifiedCount) {
          swal({
            title: "Status Approved",
            icon: "success",
          });
          setRemeaning(true);
        } else {
          setRemeaning(false);
        }
      });
  };

  return (
    // orders start
    <div className="orders">
      <Container>
        <h2 className="text-4xl font-bold mb-9 text-lime-700">
          Manage all booking list
        </h2>{" "}
        <span className="mb-6">
          {" "}
          <hr />
        </span>{" "}
        {
          <Row className="mx-7">
            <ul className="order-title">
              <li>book item</li>
              <li>email</li>
              <li>name</li>
              <li>address</li>
              <li>date</li>
              <li>tickets</li>
              <li>status</li>
              <li>delete</li>
              <li>update</li>
            </ul>
            {orders.map((order) => (
              <div key={order._id} className="order">
                {/* <ul className="mb-5">
                  <li>book item</li>
                  <li>email</li>
                  <li>name</li>
                  <li>address</li>
                  <li>date</li>
                  <li>tickets</li>
                  <li>status</li>
                  <li>delete</li>
                  <li>update</li>
                </ul> */}
                <ul className="order-info mt-5">
                  <li>{order?.title}</li>
                  <li>{order?.email}</li>
                  <li>{order?.name}</li>
                  <li>{order?.address}</li>
                  <li>{order?.date}</li>
                  <li>{order?.tickets}</li>
                  <li>{order?.status}</li>
                  <li>
                    <button
                      onClick={() => handleDeleteBtn(order._id)}
                      className="btn btn-active btn-warning text-lg text-black"
                    >
                      Delete
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleUpdateBtn(order._id)}
                      className="btn btn-active btn-secondary text-lg"
                    >
                      UPdate
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </Row>
        }
      </Container>
    </div>
    // orders end
  );
};

export default ManageAllOrders;
