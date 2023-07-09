import { AxiosError } from "axios";
import { privateGateway } from "../../services/apiGateway";
import { routes } from "../../services/urls";


export const login = async (username: string, password: string, navigate:any) => {
    try {
        const response = await privateGateway.post(
            routes.getAccessToken,
            {
                username: username,
                password: password,
            },
        );
        const message: any = response?.data;
        console.log(message);
		localStorage.setItem('accessToken', message.access)
		localStorage.setItem('refreshToken', message.refresh)
		navigate("/home");
    } catch (err: unknown) {
        const error = err as AxiosError;
        if (error?.response) {
            console.log(error.response);
        }		
    }
};


