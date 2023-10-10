import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import EventDtails from "../components/EventDtails/EventDtails";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./privateRoute";
import Info from "../Pages/Info/Info";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Error from "../Error/Error";

const MyRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/data.json'),
            },
            {
                path:"/details/:id",
                element: <PrivateRoute><EventDtails></EventDtails></PrivateRoute>,
                loader: () => fetch('/data.json'),
            },
            {
                path:"/info",
                element: <PrivateRoute><Info></Info></PrivateRoute>,
            },
            {
                path:"/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/registration",
                element:<Register></Register>
            }
        ]
    }
]);

export default MyRoute;