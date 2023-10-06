import { Children, useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    // to go after sign in
    const location = useLocation();
    console.log(location.pathname);
    
    if(loading)
    {
        return <span className="loading loading-dots loading-lg"></span>

    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
    
    
    
    return (
        <div>

            
        </div>
    );
};

export default PrivateRoute;