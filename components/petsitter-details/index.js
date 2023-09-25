import { Typography, Grid, Button, Divider, Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { StyledButton1, StyledButton2 } from "./styled-components";
import { useEffect, useState } from "react";
import { getToken } from "../../utils/auth";

function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
        stars.push(<StarIcon key={i} color="secondary" />);
    }
    return stars;
}

  async function fetchPetsitterById(petsitterId) {
    try {
      const token = localStorage.getItem('token'); 
      const headers = {
        'Authorization': `${getToken()}`,
        'Content-Type': 'application/json',
      };
  
      const response = await fetch(`http://localhost:5500/api/petsitters/${petsitterId}`, {
        method: 'GET', 
        headers: headers,
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Error fetching petsitter details:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error fetching petsitter details:', error);
      return null;
    }
  }
  

export default function PetsitterDetails({ petsitterId }) {

    const [cuidadorDetalles, setCuidadorDetalles] = useState('');

    useEffect(() => {
       
        async function fetchDetails() {
          if (petsitterId) {
            const data = await fetchPetsitterById(petsitterId);
            if (data) {
              setCuidadorDetalles(data);
            }
          }
        }
    
        fetchDetails();
      }, [petsitterId]);


      if (!cuidadorDetalles) {
        return <div>Loading...</div>;
      }
    return (
        <Grid container rowSpacing={6} direction='column' sx={{ maxWidth: '350px' }} >
            <Grid container item spacing={2}>
                <Grid item>
                    <Typography variant="h2">
                        {cuidadorDetalles.name} {cuidadorDetalles.lastname}
                    </Typography>
                </Grid>
                <Grid item>
                    {renderStars(5)}
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h3"> Se ubica en: </Typography>
                <Typography variant="body1">{cuidadorDetalles.city.name}, {cuidadorDetalles.city.state.name}</Typography>
            </Grid>
            <Typography variant="body1">({cuidadorDetalles.age}) Años de experiencia con:</Typography>

            <Grid container item direction='row' spacing={3}>
                <Grid item>
                    <Grid container direction='column' alignItems='center' justifyContent='center'>
                        <Grid item>
                            <img src='/dog.png' alt="Perro" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">Perros</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Divider orientation="vertical" variant="middle" />
                </Grid>
                <Grid item>
                    <Grid container direction='column' alignItems='center' justifyContent='center'>
                        <Grid item>
                            <img src='/cat.png' alt="Gato" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">Gatos</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Divider orientation="vertical" variant="middle" />
                </Grid>
                <Grid item>
                    <Grid container direction='column' alignItems='center' justifyContent='center'>
                        <Grid item>
                            <img src='/bird.png' alt="Aves" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">Aves</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Grid container item spacing={12} direction='row' alignItems='center'>
                <Grid item>
                    <Grid container item direction='column'>
                        <Typography variant="h3">
                            Hospedaje
                        </Typography>
                        <Typography variant="body1">
                            en casa del cuidador
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container item direction='column' alignItems='flex-end'>
                        <Typography variant="h3">
                            $300
                        </Typography>
                        <Typography variant="body1">
                            por noche
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container item spacing={11} direction='row' alignItems='center'>
                <Grid item>
                    <Grid container item direction='column'>
                        <Typography variant="h3">
                            Guardería
                        </Typography>
                        <Typography variant="body1">
                            en guardería del cuidador
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container item direction='column' alignItems='flex-end'>
                        <Typography variant="h3">
                            $200
                        </Typography>
                        <Typography variant="body1">
                            por día
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>


            <Grid container item >
                <StyledButton2 variant="contained" ><Typography variant="h3"> Contratar a {cuidadorDetalles.name} </Typography></StyledButton2>
                <StyledButton1 variant="contained" ><Typography variant="h3"> Hazme una pregunta </Typography></StyledButton1>
            </Grid>

            <Grid container item spacing={2}>
                <Grid item>
                    <Typography variant="h2">
                    {cuidadorDetalles.name} {cuidadorDetalles.lastname}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1">
                        Mi objetivo principal es proporcionar un cuidado de alta calidad y amoroso para cada animal que llega a mi cuidado. Si estás buscando a alguien que trate a tus mascotas con el mismo amor y cariño que tú lo haces, no dudes en ponerse en contacto conmigo. Estaré encantada de cuidar de tus adorables compañeros.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container item spacing={2}>
                <Grid item>
                    <Typography variant="h2">
                        Algunas habilidades
                    </Typography>
                </Grid>
                <Grid item>

                    <ul>
                        <li>
                            <Typography variant="body1">Administra inyecciones</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Administra medicina</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Cuidados especiales</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Formación en primeros auxilios</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Experto en perros activos</Typography>
                        </li>
                    </ul>

                </Grid>
            </Grid>

        </Grid>
    );
}
