import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from 'react-redux';
import { VerViviendaAction } from '../../../redux/actions/ViviendaActions';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
  container: {
    marginLeft:"50px",
    marginRight:"50px",
    // position:"relative",
  },
  container_detalle: {
    border: "3px solid black",
    display:"flex",
    width:"100%",
    marginTop:"150px",
    // margin:"200px",
  },

  img:{
    width:"30%",
    border:"3px solid red",
  },

  detalle:{
    width:"70%",
    border:"3px solid blue",
    textAlign:"start",
    padding:"15px"
  },

  miniatura:{
    border: "1px solid black",
    marginRight:"3px",
    width:"20%",
  },
  recomendaciones:{
    border:"1px solid black",
    marginTop:"20px",
    textAlign:"start",
    padding:"15px",
  }
  
});


const DetalleVivienda = () => {
  const dispatch = useDispatch();
  const vivienda = useSelector((store) => store.vivienda.vivienda);
  const classes = useStyles();
  const {id} = useParams();



useEffect(() => {
  dispatch(VerViviendaAction(id));
}, [])



  return (
    <div className={classes.container}>
      <div className={classes.container_detalle}>
        <div className={classes.img}>
        <img src="https://pngimg.com/uploads/house/house_PNG52.png" width={"100%"}/>
        <div>
          <img src="https://pngimg.com/uploads/house/house_PNG52.png"  className={classes.miniatura}/>
          <img src="https://pngimg.com/uploads/house/house_PNG52.png"  className={classes.miniatura}/>
          <img src="https://pngimg.com/uploads/house/house_PNG52.png"  className={classes.miniatura}/>
          <img src="https://pngimg.com/uploads/house/house_PNG52.png"  className={classes.miniatura}/>
          <img src="https://pngimg.com/uploads/house/house_PNG52.png"  className={classes.miniatura}/>
          <img src="https://pngimg.com/uploads/house/house_PNG52.png"  className={classes.miniatura}/>
          <img src="https://pngimg.com/uploads/house/house_PNG52.png"  className={classes.miniatura}/>
          <img src="https://pngimg.com/uploads/house/house_PNG52.png"  className={classes.miniatura}/>
          <img src="https://pngimg.com/uploads/house/house_PNG52.png"  className={classes.miniatura}/>
          <img src="https://pngimg.com/uploads/house/house_PNG52.png"  className={classes.miniatura}/>
          </div>
        
        </div>
        
        <div className={classes.detalle}>
        <h1>Titulo: {vivienda.titulo}</h1>
        <p>Descripción: {vivienda.descripcion}</p>
        <p><b>M2:</b> </p>
        <p><b>Estado del inmueble:</b> </p>
        <p><b>Tipo de vivienda:</b> </p>
        <p style={{fontSize:"25px"}}><b>Precio: {vivienda.precio}€</b></p>
        <Button variant="outlined">CONTACTAR CON LA INMOBILIARIA</Button>
        
        </div>
        
      </div>
      <div className={classes.recomendaciones}>
        <h1>Recomendaciones</h1>

        </div>
    </div>
  )
}

export default DetalleVivienda
