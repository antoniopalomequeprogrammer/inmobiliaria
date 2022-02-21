import { Button, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import React, { useState } from 'react'
import { useStyles } from "../../styles/styles";
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import SearchIcon from '@material-ui/icons/Search';


const Filtros = () => {

  // Cargar los diferentes estados de pisos que hay.





  const classes = useStyles();
  const [value, setValue] = useState([0,1000]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <h3 className={classes.title_filtros}>Encuentra el piso perfecto através de nuestros filtros</h3>


    
    <Typography id="range-slider" gutterBottom>
        Ajusta el rango de precios
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    
    
    <FormControl className={classes.form_filtros}>
        <InputLabel id="demo-simple-select-label">Estado del piso</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.form_filtros}>
        <InputLabel id="demo-simple-select-label">Nº de Habitaciones</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value={1}>1 Habitación</MenuItem>
          <MenuItem value={2}>2 Habitaciones</MenuItem>
          <MenuItem value={3}>3 Habitaciones</MenuItem>
          <MenuItem value={99999}>+ de 3 Habitaciones</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.form_filtros}>
        <InputLabel id="demo-simple-select-label">Nº de Planta</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value={0}>Bajo</MenuItem>
          <MenuItem value={1}>Primera Planta</MenuItem>
          <MenuItem value={2}>Segunda Planta</MenuItem>
          <MenuItem value={3}>Tercera Planta</MenuItem>
          <MenuItem value={4}>Cuarta Planta</MenuItem>
          <MenuItem value={5}>Quinta Planta</MenuItem>
          <MenuItem value={6}>Sexta Planta</MenuItem>
          <MenuItem value={7}>Septima Planta</MenuItem>
          <MenuItem value={8}>Octava Planta</MenuItem>
          <MenuItem value={9}>Indiferente</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.form_filtros}>
        <InputLabel id="demo-simple-select-label">Nº de Baños</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value={1}>1 Baño</MenuItem>
          <MenuItem value={2}>2 Balos</MenuItem>
          <MenuItem value={3}>3 Baños</MenuItem>
          <MenuItem value={999}>Indiferente</MenuItem>
        </Select>
      </FormControl>

      <Button className={classes.boton_filtro} variant="contained" color="primary"> Buscar <SearchIcon/> </Button>



    </div>
  )
}

export default Filtros