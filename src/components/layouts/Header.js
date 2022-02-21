import React, { useEffect } from "react";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import {useStyles} from '../styles/styles';
import { LogoutAction } from "../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
export default function Header(props) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const authResponse = useSelector((state) => state.userAuth.authResponse);
  const logOut = () => {
    dispatch(LogoutAction());
    history.push("/user/login");
  };
  const login = () => {
    history.push("/user/login");
  };
  const token = localStorage.getItem("user-token");
  useEffect(() => {
    if (authResponse !== "" && authResponse.success === true) {
      localStorage.removeItem("user-token");
    }
    return () => {};
  }, [authResponse]);
  return (
    <div >
      <CssBaseline />
      <AppBar position="fixed" style={{background:"#376996",display:"flex"}}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <Link to="/home"></Link>
          </Typography>
          <Typography variant="h6" noWrap>
            Plataformas para Inmobiliarias
          </Typography>
          {token !== null && token !== "" ? (
            <Button color="inherit" onClick={logOut}>
              Cerrar Sesión
            </Button>
          ) : (
            <Button color="inherit" onClick={login}>
              Acceder
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
