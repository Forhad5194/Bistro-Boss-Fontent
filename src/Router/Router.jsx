import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/order/order/order";
import Login from "../Pages/LogIn/LonIn";
import SingUp from "../Pages/SingUp/SingUp";


export const route = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'menu',
                element: <Menu />,
            },
            {
                path: 'order/:category',
                element: <Order />,
            },
            {
                path:'Login',
                element: <Login />
            },
            {
                path: 'SingUp',
                element: <SingUp />
            }
        ]
    }
])

