import axios from "axios";
// import { routes } from "./urls";

export const privateGateway = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL as string,
    headers: {
        "Content-Type": "application/json",
    },
});

// privateGateway.interceptors.request.use(
//     function (config) {
//         if (localStorage.getItem("accessToken") !== null) {
//             config.headers["Authorization"] = `Bearer ${localStorage.getItem(
//                 "accessToken"
//             )}`;
//         }

//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );
// privateGateway.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {

//         if (error.response.data.statusCode === 1000) {
//             privateGateway
//                 .post(routes.getAccessToken, {
//                     refreshToken: localStorage.getItem("refreshToken"),
//                 })
//                 .then((response) => {
//                     localStorage.setItem(
//                         "accessToken",
//                         response.data.response.accessToken
//                     );

//                     const config = error.config;
//                     config.headers[
//                         "Authorization"
//                     ] = `Bearer ${localStorage.getItem("accessToken")}`;
//                     return new Promise((resolve, reject) => {
//                         privateGateway
//                             .request(config)
//                             .then((response) => {
//                                 resolve(response);
//                             })
//                             .catch((error) => {
//                                 reject(error);
//                             });
//                     });
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                     // toast.closeAll();
//                     // toast({
//                     //     title: "Your session has expired.",
//                     //     description: "Please login again.",
//                     //     status: "error",
//                     //     duration: 5000,
//                     //     isClosable: true,
//                     // });

//                     //wait for 3 seconds

//                     setTimeout(() => {
//                         localStorage.clear();
//                         window.location.href = "/login";
//                     }, 3000);
//                 });
//         }

//         // Any status codes that falls outside the range of 2xx cause this function to trigger
//         // Do something with response error
//         return Promise.reject(error);
//     }
// );
