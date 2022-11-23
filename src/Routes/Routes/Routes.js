import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../../Layout/Dashboardlayout";
import Main from "../../Layout/Main/Main";

import Aaappointment from "../../pages/Appointment/Appointment/Aaappointment";
import Adddoctor from "../../pages/Dashboard/Adddoctor/Adddoctor";
import Allusers from "../../pages/Dashboard/Allusers/Allusers";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Managedoctor from "../../pages/Dashboard/Managedoctor/Managedoctor";
import Myappointment from "../../pages/Dashboard/My appointment/Myappointment";
import Payment from "../../pages/Dashboard/Payment/Payment";

import Home from "../../pages/Home/home/Home";
import Login from "../../pages/LOgin/Login";
import Errorelement from "../../pages/Shared/Errorelement/Errorelement";
import Signup from "../../pages/Signup/Signup";
import Adminprivateroute from "../Adminprivateroute/Adminprivateroute";
import PRivateroute from "../Privateroute/PRivateroute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorelement></Errorelement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/ment",
        element: <Aaappointment></Aaappointment>,
      },
      {
        path: "/about",
      },
    ],
  },
  {
    path: "/dash",
    element: (
      <PRivateroute>
        <Dashboardlayout></Dashboardlayout>
      </PRivateroute>
    ),
    errorElement: <Errorelement></Errorelement>,
    children: [
      {
        path: "/dash",
        element: <Myappointment></Myappointment>,
      },
      {
        path: "/dash/users",
        element: (
          <Adminprivateroute>
            <Allusers></Allusers>
          </Adminprivateroute>
        ),
      },
      {
        path: "/dash/doctor",
        element: (
          <Adminprivateroute>
            <Adddoctor></Adddoctor>
          </Adminprivateroute>
        ),
      },
      {
        path: "/dash/managedoctor",
        element: (
          <Adminprivateroute>
            <Managedoctor></Managedoctor>
          </Adminprivateroute>
        ),
      },
      {
        path: "/dash/payment/:id",
        element: (
          <Adminprivateroute>
            <Payment></Payment>
          </Adminprivateroute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://doctors-portal-server-three-kohl.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
