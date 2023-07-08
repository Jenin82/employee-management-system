import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoginPage from "../../modules/LoginPage/LoginPage";

//To prevent a user from accessing the login page if they are already logged in.
const AuthRoutes: React.FC = () => {
    // let refreshToken = localStorage.getItem("refreshToken");
    const [refreshToken, setRefreshToken] = useState("");

    useEffect(() => {
        setRefreshToken(localStorage.getItem("refreshToken") || "");
        let userInfo = localStorage.getItem("userInfo");
        console.log("userInfo", userInfo);
    }, []);
    return refreshToken && refreshToken.length > 0 ? (
    // return refreshToken === "" ? (
        // <Navigate to={onboardingStatus ? "/profile" : "/connect-discord"} />
        <Navigate to={"/home"} />
    ) : (
        <LoginPage/>
    );
};

export default AuthRoutes;

export const PrivateRoutes: React.FC = () => {
    let refreshToken = localStorage.getItem("refreshToken");
    let redirection = window.location.pathname.slice(1);
    return refreshToken ? (
        <Outlet />
    ) : (
        <Navigate to={`/login?ruri=${redirection}`} />
    );
};