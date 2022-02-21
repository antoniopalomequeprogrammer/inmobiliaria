import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarsIcon from '@material-ui/icons/Stars';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:"10px",
  },
  media: {
    height: 140,
  },
  
});

const Vivienda = ({ vivienda }) => {
let history = useHistory();



function handleClick() {
    history.push(`/vivienda/${vivienda.id}`);
  }







  const classes = useStyles();
  return (
    <Card className={classes.root} style={{boxShadow:"0px 0px 15px 0px black"}}>
      <CardActionArea onClick={ () => handleClick()}>
        <CardMedia
          className={classes.media}
          image="https://assets-global.website-files.com/5f4f67c5950db17954dd4f52/5f5b7ee442f1e5b9fee1c117_hacerse-una-casa.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent style={{textAlign:"start"}}>
          <Typography gutterBottom variant="h5" component="h2">
            {vivienda.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {vivienda.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div id="precio_viivenda" style={{display:"flex", marginLeft:"10px", fontWeight:"600", fontSize:"28px", color:"green"}}>
      {vivienda.precio}
      </div>
      <div>
      <ul style={{display:"flex",padding:"0", justifyContent:"space-around",width:"100%", listStyle:"none"}}>
        <li>{vivienda.m2}/m2</li>
        <li>Planta {vivienda.planta}º</li>
        <li>{vivienda.habitacion} Habitaciones</li>
        <li>{vivienda.extra}</li>
      </ul>
      </div>
      
      <CardActions>
        <Button color="primary" variant="contained">
        <EmailIcon/>Contactar
        </Button>

        <Button  className={classes.favorito}>
        <PhoneIcon/>Llamar
        </Button>

        <Button>
        <StarsIcon/>
        </Button>
      
      </CardActions>
    </Card>
  );
};

export default Vivienda;
