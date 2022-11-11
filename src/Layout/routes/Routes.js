import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";

import AboutUs from "../../pages/AboutUs/AboutUs";
import AddService from "../../pages/AddService/AddService";
import Blogs from "../../pages/Blogs/Blogs";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import ManageAllOrders from "../../pages/ManageAllOrders/ManageAllOrders";
import MyOrder from "../../pages/MyOrder/MyOrder";
import NotFound from "../../pages/NotFound/NotFound";
import OurService from "../../pages/OurService/OurService";
import PrivateRoute from "../../pages/PrivateRoute/PrivateRoute";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";

import Signup from "../../pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/ourservice",
        element: <OurService></OurService>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/myorder",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/servicedetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
