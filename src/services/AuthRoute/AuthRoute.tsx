import { useEffect, useState } from "react";
import { Navigate, Outlet} from "react-router-dom";

//To prevent a user from accessing the login page if they are already logged in.
const AuthRoutes: React.FC = () => {
    // let refreshToken = localStorage.getItem("refreshToken");
    const [refreshToken, setRefreshToken] = useState("");

    useEffect(() => {
        setRefreshToken(localStorage.getItem("refreshToken") || "");
        let userInfo = localStorage.getItem("userInfo");
        console.log("userInfo", userInfo);

    }, []);
	const a = false
    // return refreshToken && refreshToken.length > 0 ? (
    return a ? (
        // <Navigate to={onboardingStatus ? "/profile" : "/connect-discord"} />
        <Navigate to={"/home"} />
    ) : (
        <Outlet />
    );
};

export default AuthRoutes;