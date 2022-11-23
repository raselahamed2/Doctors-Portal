import {createBrowserRouter,} from "react-router-dom";
import DashbordLayout from "../../../LayOut/DashbordLayout";
import Main from "../../../LayOut/Main";
import Appointment from "../../Appointment/Appointment/Appointment";
import AllUser from "../../Dashboard/AllUser/AllUser";
import AddDoctor from "../../Dashboard/Dashboard/AddDoctor/AddDoctor";
import MyAppoinment from "../../Dashboard/MyAppoinment/MyAppoinment";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Signup from "../../SignUp/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: 'appointment',
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashbordLayout></DashbordLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>
            },
            {
              path: '/dashboard/alluser',
              element: <AdminRoute><AllUser></AllUser></AdminRoute> 
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            }
        ]
    }
])