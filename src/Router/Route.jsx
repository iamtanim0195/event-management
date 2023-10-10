import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import EventDtails from "../components/EventDtails/EventDtails";
import Login from "../Login/Login";
import Register from "../Register/Register";

const MyRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/data.json'),
            },
            {
                path:"/details/:id",
                element:<EventDtails></EventDtails>,
                loader: () => fetch('/data.json'),
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