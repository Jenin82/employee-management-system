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
