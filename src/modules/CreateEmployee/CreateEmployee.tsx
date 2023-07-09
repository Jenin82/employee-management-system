import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './CreateUserForm.css';

type Props = {}

const CreateEmployee = (props: Props) => {

    const initialValues = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        role: ''
      };
    
      const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        role: Yup.string().required('Role is required')
      });
    
      const handleSubmit = (values: any) => {
        // Handle form submission here
        console.log(values);
      };

  return (
    <div className="container">
      <h1>Create User</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form-container">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <Field type="text" id="username" name="username" className="form-control" />
            <ErrorMessage name="username" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <Field type="password" id="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <Field type="text" id="firstName" name="firstName" className="form-control" />
            <ErrorMessage name="firstName" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <Field type="text" id="lastName" name="lastName" className="form-control" />
            <ErrorMessage name="lastName" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="role" className="form-label">Role</label>
            <Field as="select" id="role" name="role" className="form-control">
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Field>
            <ErrorMessage name="role" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary">Create User</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateEmployee