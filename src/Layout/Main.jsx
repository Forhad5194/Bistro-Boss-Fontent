import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation();
    const noHeaderNoFooter = location.pathname.includes('Login') ||  location.pathname.includes('SingUp')
  
    return (
        <div>
            {noHeaderNoFooter || <Navbar/>}
            <Outlet/>
            {noHeaderNoFooter ||  <Footer/>}
        </div>
    );
};

export default Main;