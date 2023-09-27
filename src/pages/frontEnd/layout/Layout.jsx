import { Outlet } from "react-router-dom";
import NavBar from "../Component/Shared/NavBar/NavBar";
import Footer from "../Component/Shared/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;