import a from "../../assets/logoBig.png";


const LandingPage = () => {
  return (
    <div>
      <style>
        {`
          body {
            background-color: #000;
          }

          .landing-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("https://st2.depositphotos.com/1757635/8830/i/950/depositphotos_88302772-stock-photo-global-business-strategy.jpg");
            background-size: cover;
            opacity: 0.6;
          }

          .landing-content {
            position: relative;
            z-index: 1;
            color: #fff;
            text-align: center;
            padding: 100px 0;
          }

          .landing-content h1 {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 30px;
          }

          .login-button {
            background: linear-gradient(to right, #fff, #94e872);
            color: #000;
            font-weight: bold;
            border-radius: 30px;
            padding: 10px 20px;
          }

          @media (max-width: 768px) {
            .landing-content {
              padding: 50px 0;
            }

            .landing-content h1 {
              font-size: 36px;
            }

            .login-button {
              padding: 8px 16px;
            }

            h1 {
              align-items: right;
              color: rgba(54, 52, 52, 0.797);
            }
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
                </div>
            </nav>
      <div className="landing-image"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="landing-content">
              <h1>Welcome to the Employment Management System</h1>
              <a href="/login" className="btn btn-primary btn-lg login-button">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
