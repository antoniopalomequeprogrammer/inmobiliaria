
import React, { useEffect } from "react";
import CardComponent from "../Cards/CardComponent";
import { useStyles } from "../styles/styles";
function HomeComponent() {

useEffect(() => {

}, [])


async function cargarViviendas(){
  
}


  const classes = useStyles();

  return (
    <>
      <div className={classes.homeRoot} xs={12} md={12} lg={12} sm={12}>
        <div className={classes.containerDiv}>
          <CardComponent xs={4} md={4} lg={4} sm={4}/>

        </div>
      </div>
    </>
  );
}
export default HomeComponent;
