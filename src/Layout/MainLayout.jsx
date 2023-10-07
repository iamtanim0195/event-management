import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import NavBer from "../components/Header/NavBer/NavBer"

const MainLayout = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    )
}

export default MainLayout