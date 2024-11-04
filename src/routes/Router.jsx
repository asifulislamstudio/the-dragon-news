import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import Root from "../layout/Root"
import {
    createBrowserRouter,
  } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import NeonCursor from "../Pages/NeonCursor/NeonCursor";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>  fetch('news.json')
            },
            {
                path: "/news/:id",
                element: <PrivateRoutes><News></News></PrivateRoutes>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/ncursor",
                element: <NeonCursor></NeonCursor>
            }

        ]
    }
  ])

  export default router;