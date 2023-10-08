import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import NavBer from "../components/Header/NavBer/NavBer"
import Footer from "../components/Footer/Footer"

const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    )
}

export default MainLayout;