import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/NotFound/NotFound";
import HomePage from "./modules/HomePage/HomePage";
import { PrivateRoutes } from "./services/AuthRoute/AuthRoute";
import LoginPage from "./modules/LoginPage/LoginPage";
import LandingPage from "./modules/LandingPage/LandingPage";
import Employees from "./modules/Employees/Employees";
import Profile from "./modules/Profile/Profile";
import CreateEmployee from "./modules/CreateEmployee/CreateEmployee";

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
			{ path: "/employees", element: <Employees /> },
            { path: "/profile", element: <Profile /> },
            { path: "/create", element: <CreateEmployee /> },
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
