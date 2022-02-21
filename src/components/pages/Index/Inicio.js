import React from 'react'
import { useStyles } from "../../styles/styles";
import Viviendas from '../Viviendas/Viviendas';


const Inicio = () => {

  const classes = useStyles();

  return (
    <>
    <div className={classes.encabezado}>
    <div style={{paddingTop:"150px"}}>
      <h1 className={classes.title_encabezado}>UNETE</h1>
      <h2 className={classes.descripcion_encabezado}>Inmuebles al alcance de todos</h2>
    </div>
    </div>
    <div className={classes.seccion1} style={{display:"flex", justifyContent:"space-around"}}>
      <Viviendas fromInicio={true}/>
    </div>
    </>
  )
}

export default Inicio