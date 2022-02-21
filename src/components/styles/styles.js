import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    homeRoot: {
      display: 'flex',
      // padding: '197px 25px 25px 25px',
      marginLeft:"10%",
      marginRight:"10%",
      // '& > *': {
      //   margin: theme.spacing(1),
      // },
    },
    containerDiv: {
      // flex:'auto',
      // margin:"20%",
      // position: 'fixed',
      
      // top: '40%',
      // left: '42.5%',
    },

    filtros:{
      marginTop:"80px",
    },

    extraBtnStyle:{
      margin:'2%'
    },
    centerItem:{
      flex:'auto',
      top:'15%',
      position:'relative',
      left:'25%',
      right:'25%',
      width:'50%',
      marginBottom: '50px',
      marginTop: '90px'
    },
    fullWidth:{
      width:'90%',
     marginBottom:'25px',
     marginTop:'20px'
    },
    linkContainer:{
     marginBottom:'20px'
    },
    authResponse:{
      fontWeight:'bolder'
    },
    title: {
      flexGrow: 1,
    },
   fullWidthProfile:{
     width:'70%',
     marginRight:'15%',
     marginLeft:'15%',
     marginTop:'80px'
   },
   link: {
     color: 'white',
     textDecoration: "none"
   },

   footer:{
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#376996",
    color: "white",
    textAlign: "center",
   },

/**
 * INICIO
 */

   encabezado:{
    height: "450px",
    background: "no-Repeat",
    backgroundImage: `url(${"https://frtassets.fotocasa.es/statics/img/home_search_bg_v2_full.webp"})`
   },

   seccion1:{
    display:" flex",
    justifyContent: "space-around",
    padding: "14px",
   },

   title_encabezado:{
    fontWeight: "700",
    fontSize:"60px",
   },

   descripcion_encabezado:{
    fontSize:"24px",
    fontWeight: "700",
   },

  //  style={{display:"flex", justifyContent:"space-around", margin:"10%"}}
   home_viviendas:{
     display:"flex",
     justifyContent:"space-around",
     margin:"5%",
     widht:"100%"
   },

   filtros:{
    width:"20%",
    borderRadius:"33px",
    padding:"30px",
    border:"2px solid #376996",
   },
   viviendas:{
    width:"90%",
    // border:"3px solid",
   },

   form_filtros:{
    width:"100%",
    marginTop:"30px",
   },
   title_filtros:{
     textAlign:"start",
   },
   boton_filtro:{
     marginTop:"15px",
     background:"#6290c8",
   },
   favorito:{
     background:"orange",
   }


  }));