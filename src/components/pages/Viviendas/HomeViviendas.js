import React from 'react'
import { useStyles } from "../../styles/styles";
import Filtros from '../Filtros/Filtros';
import Viviendas from './Viviendas';

const HomeViviendas = () => {

const classes = useStyles();


  return (
    <div id="home_viviendas" className={classes.home_viviendas} >
    <div id="viviendas" xs={8} sm={8} md={8} lg={8} xl={8} className={classes.viviendas} >
        <Viviendas/>
        </div>
        <div id="filtros" xs={4} sm={4} md={4} lg={4} xl={4} className={classes.filtros}>
        <Filtros/>
        </div>
        
    </div>
  )
}

export default HomeViviendas