import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";
import ViviendaReducer from "./ViviendaReducer";
import ShowViviendaReducer from "./Viviendas/ShowViviendaReducer";

const RootReducer = combineReducers({
  userAuth: AuthReducer,
  userDetails: ProfileReducer,
  viviendas: ViviendaReducer,
  vivienda:ShowViviendaReducer,
})
export default RootReducer;
