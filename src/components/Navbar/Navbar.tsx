import { useNavigate } from "react-router-dom";
import a from "../../assets/logoBig.png";
// type Props = {};

const Navbar = () => {
    const navigate = useNavigate();
    const access = localStorage.getItem("accessToken");
    function handleLogout(): void {
        localStorage.clear();
        navigate("/login");
    }
    return (
        <>
        <style>{`
         .logoutButton {
            height:40px;
            background: linear-gradient(to right,rgba(244, 248, 249, 0.514),rgba(246, 247, 248, 0.482));
            color:white;
            }
            .custom-shadow {
                box-shadow: 0 0 10px rgba(0, 0, 0, 1.2); /* Define your own shadow properties here */
              }
           
  `}
        </style>
            <nav
                className="navbar  custom-shadow p-3 navbar-expand-lg bg-body-tertiary fixed-top bg-dark border-bottom border-bottom-dark"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/profile">
                        <img
                            src={a}
                            alt="Logo"
                            width="100"
                            className="d-inline-block align-text-top"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <div className="row justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="/profile"
                                    >
                                        Profile
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        href="/employees"
                                    >
                                        Employees
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        QA & Testing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        UI/Ux
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        Technical Support
                                    </a>
                                </li>
                                {access && (
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            onClick={handleLogout}
                                            href="/login"
                                        >
                                            logout
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
