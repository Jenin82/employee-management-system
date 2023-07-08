import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes: React.FC = () => {
    let refreshToken = localStorage.getItem("refreshToken");
    return refreshToken ? (
        <Outlet />
    ) : (
        <Navigate to={'/login'} />
    );
};