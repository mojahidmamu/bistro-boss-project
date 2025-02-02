import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homes/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import SingUp from "../Pages/SingUp/SingUp";
import Secret from "../Pages/Shared/Secret/Secret"
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Shared/Contact/Contact"; 
import DESSERTS from "../Pages/Order/SubLinks/DESSERTS";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'singUp',
          element: <SingUp></SingUp> 
        },
        {
          path: 'secret',
          element: <Secret></Secret>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },
        {
          path: 'DESSERTS',
          element:<DESSERTS></DESSERTS>
        }
    ],
  },
]);
