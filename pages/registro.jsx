import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Grid, Box, TextField, IconButton, Avatar, Button} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'; 
import theme from './register-theme';

const InputProps = {
    disableUnderline: true,
    style: {
        borderRadius: 20,
        width: '354px',
        height: '60px',
        paddingLeft: 20,
        backgroundColor: 'white'
    },
};


export default function Register() {
    return (
        <ThemeProvider theme={theme}> 
      
            <CssBaseline />
            <Grid container sx={{
                flexGrow: 1,
                backgroundColor: '#0E4B5B',
               /*  height: '100%', */
                mt: '4rem',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Cuidacan" src="/cuidaCan.png" sx={{ mr: 1, width: 80, height: 80}} />
                    </IconButton>
                    <Typography variant="h2" component="div" sx={{ flexGrow: 1, fontFamily: 'Nunito, sans-serif', fontWeight: 400 }}>
                        <span style={{ color: '#FFFFFF' }}>Cuida</span>
                        <span style={{ color: '#EFA60B' }}>Can</span>
                    </Typography>
                </Grid>

                <Grid sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '90%' }}>
                    <Typography sx={{
                        fontWeight: 800,
                        fontSize: 47,
                        fontFamily: 'Poppins, sans-serif',
                        color: '#FFF',
                        ml: 8,
                        mr: 8 
                    }}>
                        Crear Cuenta
                    </Typography>
                </Grid>

                <Grid noValidate autoComplete="off"  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 6, height: '40%', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <TextField label='Nombre (s)' variant='filled' InputProps={InputProps} />
                    <TextField label='Apellido (s)' variant='filled' InputProps={InputProps} />
                    <TextField label='Dirección' variant='filled' InputProps={InputProps} />
                    <TextField label='Teléfono' variant='filled' InputProps={InputProps} />
                    <TextField label='Correo' variant='filled' InputProps={InputProps} />
                    <TextField label='Contraseña' variant='filled' type='password' InputProps={InputProps} />
                    <TextField label='Repetir contraseña' variant='filled' type='password' InputProps={InputProps} />
                </Grid>

                <Grid  sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', width: '80%', mt: 10 }}>
                <Button variant="contained" sx={{backgroundColor:'#EFA60B', width:'354px', height:'60px', borderRadius: 5, fontSize: '1.5', fontFamily: 'Poppins, sans-serif'}}>Crear cuenta</Button>
                </Grid>


            </Grid>
     
        </ThemeProvider>
    );
}
