import { useNavigate } from "react-router-dom";
import a from "../../assets/logoBig.png";
// type Props = {};

const Navbar = () => {
    const navigate = useNavigate();
    const access = localStorage.getItem("accessToken");
    function handleLogout(event: any): void {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <>
            <nav
                className="navbar p-3 navbar-expand-lg bg-body-tertiary fixed-top bg-dark border-bottom border-bottom-dark"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
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
                                        href="#"
                                    >
                                        Promotions
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/employees">
                                        Employees
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        QA & Testing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        UI/Ux
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Technical Support
                                    </a>
                                </li>
                                {access && (
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
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
