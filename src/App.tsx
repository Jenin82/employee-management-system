import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/NotFound/NotFound";
import HomePage from "./modules/HomePage/HomePage";
import { PrivateRoutes } from "./services/AuthRoute/AuthRoute";
import LoginPage from "./modules/LoginPage/LoginPage";
import LandingPage from "./modules/LandingPage/LandingPage";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "404",
        element: <NotFound />,
    },
    {
        path: "/",
        element: <PrivateRoutes />,
        children: [
            { path: "/", element: <LandingPage /> },
            {
                path: "/home",
                element: <HomePage />,
            },
            // { path: "login", element: <Login /> },
            // { path: "forgot-password", element: <ForgotPassword /> },
            // { path: "reset-password", element: <ResetPassword /> },
        ],
    },
    { path: "/login", element: <LoginPage /> },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
