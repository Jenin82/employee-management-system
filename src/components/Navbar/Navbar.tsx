import a from "../../assets/logoBig.png"
import { useNavigate } from "react-router-dom";
// type Props = {};

const Navbar = () => {

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.setItem("loggedin", "false");
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
        
  `}
        </style>
            <nav
                className="navbar p-3 navbar-expand-lg bg-body-tertiary fixed-top bg-dark border-bottom border-bottom-dark"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={a} alt="Logo" width="100" className="d-inline-block align-text-top" />
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
                    <div className="collapse navbar-collapse" id="navbarNav">
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
                                <a className="nav-link" href="#">
                                    Developers
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
                            <button className="logout" onClick={handleLogout}>
          Logout
        </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
