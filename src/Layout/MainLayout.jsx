import { Outlet } from "react-router-dom"
import NavBer from "../components/Header/NavBer/NavBer"
import Footer from "../components/Footer/Footer"
import { Toaster } from "react-hot-toast"

const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    )
}

export default MainLayout;