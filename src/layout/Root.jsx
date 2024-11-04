import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-poppins">
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Root;