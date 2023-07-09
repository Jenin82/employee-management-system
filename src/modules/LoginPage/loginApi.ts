import { AxiosError } from "axios";
import { privateGateway } from "../../services/apiGateway";
import { routes } from "../../services/urls";
import { notify, success } from "../../components/Common/Tostify";


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
		localStorage.setItem('accessToken', message.response.access)
		localStorage.setItem('refreshToken', message.response.refresh)
		navigate("/home");
    } catch (err: unknown) {
        const error = err as AxiosError;
        if (error?.response) {
            console.log(error.response);
        }		
    }
    if(username === localStorage.getItem('userName') && password === localStorage.getItem('password')){
        success()
        localStorage.setItem('loggedIn', 'true');
    }
    else{

        notify()
    } 
};


