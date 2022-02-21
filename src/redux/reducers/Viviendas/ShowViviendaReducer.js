import * as ActionTypes from "../../ActionTypes";
const initState = {
  vivienda: {},
};
const ShowViviendaReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_VIVIENDA_ERROR:
      return {
        ...state,
        authResponse: "",
      };

    case ActionTypes.SHOW_VIVIENDA_SUCCESS:
        return {
            ...state,
            vivienda: action.payload.vivienda,
        }
    
    default:
      return state;
  }
};
export default ShowViviendaReducer;