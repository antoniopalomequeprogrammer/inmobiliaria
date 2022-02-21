import * as ActionTypes from "../ActionTypes";
const initState = {
  viviendas: [],
};
const ViviendaReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_VIVIENDAS_ERROR:
      return {
        ...state,
        authResponse: "",
      };

    case ActionTypes.LOAD_VIVIENDAS_SUCCESS:
        return {
            ...state,
            viviendas: action.payload.viviendas,
        }
    
    default:
      return state;
  }
};
export default ViviendaReducer;