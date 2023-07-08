// type Props = {}

const LoginPage = () => {
  return (
      <>
          <section className="vh-100 custom-bg">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong custom-card">
              <div className="card-body p-5 text-center">

                <h2 className="mb-5 font-weight-bold">LOG IN</h2>

                <div className="form-outline mb-4">
                  <label className="form-label custom-label" htmlFor="typeEmailX-2">Email</label>
                  <input type="email" id="typeEmailX-2" className="form-control form-control-lg" style={{ border: '1px solid black' }} />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label custom-label" htmlFor="typePasswordX-2">Password</label>
                  <input style={{ border: '1px solid black' }} type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                </div>

                <button className="btn btn-success btn-lg btn-block" type="submit">Login</button>

                <hr className="my-4" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section></>
  );
}

export default LoginPage