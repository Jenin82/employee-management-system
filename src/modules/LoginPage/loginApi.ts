import { AxiosError } from "axios";
import { privateGateway } from "../../services/apiGateway";
import { routes } from "../../services/urls";


export const login = async (username: string, password: string) => {
    try {
        const response = await privateGateway.post(
            routes.getAccessToken,
            {
                username: username,
                password: password,
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                maxBodyLength: Infinity,
            }
        );
        const message: any = response?.data;
        console.log(message);
    } catch (err: unknown) {
        const error = err as AxiosError;
        if (error?.response) {
            console.log(error.response);
        }
    }
};


