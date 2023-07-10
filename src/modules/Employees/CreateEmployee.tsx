import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./createEmployee.css";
import Navbar from "../../components/Navbar/Navbar";
import { createUser } from "./employeeApi";

const CreateEmployee = () => {
    const initialValues = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
		mobile: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().required("Role is required"),
		mobile: Yup.number().required("Mobile is required"),
    });

    const handleSubmit = (values: any) => {
        createUser(
			values.username,
			values.password,
			values.firstName,
			values.lastName,
			values.email,
			values.mobile
		)
        console.log(values);
    };

    return (
        <>
            <Navbar />
            <h1 className="heading">Create User</h1>
            <div className="container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="form-container">
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <Field
                                type="text"
                                id="username"
                                name="username"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="username"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <Field
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="firstName"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName" className="form-label">
                                Last Name
                            </label>
                            <Field
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="lastName"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username" className="form-label">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">
                                Mobile
                            </label>
                            <Field
                                type="number"
                                id="mobile"
                                name="mobile"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="mobile"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <button type="submit" className="btn btn-success">
                            Create User
                        </button>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default CreateEmployee;
