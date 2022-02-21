import { CargarViviendas,CargarVivienda } from "../../services/ViviendaServices";
import * as ActionTypes from "../ActionTypes";

export const CargarViviendasAction =
  (filtros = false) =>
  async (dispatch) => {
    try {
      const res = await CargarViviendas(filtros);
      if (!res.error) {
        dispatch({
          type: ActionTypes.LOAD_VIVIENDAS_SUCCESS,
          payload: {
            viviendas: res.viviendas,
          },
        });
      } else {
        dispatch({
          type: ActionTypes.LOAD_VIVIENDAS_ERROR,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

export const VerViviendaAction =
  (id) =>
  async (dispatch) => {
    try {
      const res = await CargarVivienda(id);
      if (!res.error) {
        console.log({res});
        dispatch({
          type: ActionTypes.SHOW_VIVIENDA_SUCCESS,
          payload: {
            vivienda: res.vivienda,
          },
        });
      } else {
        dispatch({
          type: ActionTypes.SHOW_VIVIENDA_ERROR,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
