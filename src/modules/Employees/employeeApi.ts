import { AxiosError } from "axios";
import { privateGateway } from "../../services/apiGateway";
import { routes } from "../../services/urls";

export const getEmployees = async (
	setData: any
) => {
    try {
        const response = await privateGateway.get(routes.getEmployees);
        const message: any = response?.data;
        console.log(message);
		setData(message)
    } catch (err: unknown) {
        const error = err as AxiosError;
        if (error?.response) {
            console.log(error.response);
        }
    }
};

export const createUser = async (
	username: string,
	password: string,
	first_name: string,
	last_name: string,
	email: string,
	mobile: string,
) => {
    try {
        const response = await privateGateway.post(routes.getEmployees, {
			usernames: username,
			password: password,
			first_name: first_name,
			last_name: last_name,
			email: email,
			mobile: mobile,
			role: "Employee"
		});
        const message: any = response?.data;
        console.log(message);
    } catch (err: unknown) {
        const error = err as AxiosError;
        if (error?.response) {
            console.log(error.response);
        }
    }
};
