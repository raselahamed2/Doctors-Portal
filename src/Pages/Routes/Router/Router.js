import {createBrowserRouter,} from "react-router-dom";
import Main from "../../../LayOut/Main";
import Appointment from "../../Appointment/Appointment/Appointment";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Signup from "../../SignUp/Signup";
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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])