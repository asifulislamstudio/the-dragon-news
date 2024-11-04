import { Children, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation();
   
   
    if (loading) {
        return <div className="w-screen  h-screen flex justify-center items-center mx-auto">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;