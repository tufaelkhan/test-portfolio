import { Outlet } from "react-router-dom";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";

function Main() {
    return (
        <div className="bg-slate-800">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Main;