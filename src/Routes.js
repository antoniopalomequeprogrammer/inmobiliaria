import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/pages/HomeComponent";
import Login from "./components/pages/LoginComponent";
import Register from "./components/pages/RegisterComponent";
import PrivateRoute from "./PrivateRoute";
import { Guard } from "./Guards";
import Header from "./components/layouts/Header";

import Footer from "./components/layouts/Footer";
import DetalleVivienda from "./components/pages/Viviendas/DetalleVivienda";
import Inicio from "./components/pages/Index/Inicio";
import Viviendas from "./components/pages/Viviendas/Viviendas";
import HomeViviendas from "./components/pages/Viviendas/HomeViviendas";

function Routes() {
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Redirect to={{ pathname: "/inicio" }} />}
        />
        <Route path="/home" component={Home} />
        <Route path="/inicio" component={Inicio}/>
        <Route path="/vivienda/:id" component={DetalleVivienda}/>
        <Route path="/user/login" component={Login} />
        <Route path="/viviendas" component={HomeViviendas}/>
        <Route path="/user/register" component={Register} />
        {/*Redirect if not authenticated */}
        <Guard
          path="/user"
          token="user-token"
          routeRedirect="/user/login"
          component={PrivateRoute}
        />
      </Switch>
      <Footer />
    </>
  );
}
export default Routes;
