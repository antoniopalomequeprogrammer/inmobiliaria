
import React, { useEffect } from "react";
import CardComponent from "../Cards/CardComponent";
import { useStyles } from "../styles/styles";
import Filtros from "./Filtros/Filtros";
import Viviendas from "./Viviendas/Viviendas";

function HomeComponent() {




  const classes = useStyles();



  return (
    <>
    <Filtros/>
      <Viviendas/>
    </>
  );
}
export default HomeComponent;
