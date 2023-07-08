import { Formik, Field, Form, FormikHelpers } from "formik";
import "./styles.css";
import a from "../../assets/logoBig.png"
import { login } from "./loginApi";
import { loading } from "../../components/Common/Tostify";
import { ToastContainer } from "react-toastify";

// type Props = {}

interface Values {
    username: string;
    password: string;
}

const LoginPage = () => {

    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand">
						<img src={a} className="w-50 p-2" alt="logo" />
					</a>
                </div>
            </nav>
            <div className="form-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                            <Formik
                                initialValues={{
                                    username: "",
                                    password: "",
                                }}
                                onSubmit={(
                                    values: Values,
                                    { setSubmitting }: FormikHelpers<Values>
                                ) => {
                                    // setTimeout(() => {
                                    //     alert(JSON.stringify(values, null, 2));
                                    //     setSubmitting(false);
                                    // }, 500);
                                    loading()
									login(values.username, values.password);
                                }}
                            >
                                <div className="form-container">
                                    <Form className="form-horizontal">
                                        <h3 className="title">Login</h3>
                                        <div className="form-group">
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <Field
                                                className="form-control"
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <span className="forgot-pass">
                                            <a href="#">Forgot password?</a>
                                        </span>
                                        <button
                                            type="submit"
                                            className="btn signin"
                                        >
                                            Login
                                        </button>
                                    </Form>
                                </div>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    );
};

export default LoginPage;
