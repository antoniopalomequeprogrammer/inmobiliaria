import React, { useEffect } from "react";
import { useStyles } from "../../styles/styles";
import { CargarViviendasAction } from "../../../redux/actions/ViviendaActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Vivienda from "./Vivienda";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Viviendas = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const viviendas = useSelector((store) => store.viviendas.viviendas);

  useEffect(() => {
    dispatch(CargarViviendasAction());
  }, []);

  const classes = useStyles();


  const handleClick = () => {
    history.push(`/viviendas`);
  }


  return (
    <>
    <div
      className={classes.homeRoot}
      xs={12}
      md={12}
      lg={12}
      sm={12}
      xl={12}
      style={{ display: "flex" }}
    >
    
    
      <Grid container 
      className={classes.containerDiv}>

      {viviendas?.length>0 ? 
        
        viviendas.map((vivienda) => (
          <>
          <Vivienda key={vivienda.id} xs={12} sm={12} vivienda={vivienda} />

          </>

        )):<h3>No hay viviendas publicadas</h3>
      }

      {viviendas?.length>0 && 
        <div style={{width:"100%", marginTop:"15px"}}>
        <Button color="primary" variant="contained" onClick={handleClick}>Ver Más Viviendas</Button>
        
        </div>

      }

      
      
        
      </Grid>
    </div>
    </>
  );
};

export default Viviendas;
