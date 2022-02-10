import HttpService from "./HttpService";
import { ToastContainer, toast } from 'react-toastify';


export const RegisterUserService = (credentials) => {
  const http = new HttpService();
  let signupUrl = "users/register";
  return http
    .postData(credentials, signupUrl)
    .then((data) => {
      console.log(data);
      toast("Se ha registrado correctamente", {type:"success"});
      return data;
    })
    .catch((error) => {
      return error;
    });
};



export const LoginUserService = (credentials) => {
  const http = new HttpService();
  let loginUrl = "users/login";
  return http
    .postData(credentials, loginUrl)
    .then((data) => {
        toast("Se ha logueado correctamente", {type:"success"});
      console.log({data});
      return data;
    })
    .catch((error) => {
        toast("Error al intentar loguearse", {type:"error"});
      return error;
    });
};



export const LogOutUserService = () => {
  const http = new HttpService();
  let loginUrl = "users/logout";
  const tokenId = "user-token";
  return http
    .getData(loginUrl, tokenId)
    .then((data) => {
        
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });
};
