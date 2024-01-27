import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/order/order/order";


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
            }
        ]
    }
])

