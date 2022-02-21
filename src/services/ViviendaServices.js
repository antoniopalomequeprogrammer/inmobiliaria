import HttpService from "./HttpService";
const http = new HttpService();
export const CargarViviendas = () => {
    
    let api_viviendas = "viviendas/index";
    return http
    .getData(api_viviendas)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        return error;
      });
  };


export const CargarVivienda = (id) => {
    let api_vivienda = `viviendas/show/${id}`;
    return http
    .getData(api_vivienda)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        return error;
      });
  };