import HttpService from "./HttpService";

export const cargarViviendas = () => {
    const http = new HttpService();
    let signupUrl = "viviendas/index";
    return http
    .getData(signupUrl)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        return error;
      });
  };