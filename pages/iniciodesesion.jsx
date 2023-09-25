import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Grid, TextField, IconButton, Avatar, Button } from '@mui/material';
import { decodeToken, setToken, getToken } from '../utils/auth';
import { useRouter } from "next/router";
import { login } from '../redux/authReducers';


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


export default function Login() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:5500/api/usuarios/login', {
            email: email,
            password: password,
          });
          setEmail('');
          setPassword('');

          const decodedUser = decodeToken(response.data.token);
          setToken(response.data.token);
        
         

          dispatch(login(decodedUser));

          router.push("/cuidadores");
        } catch (error) {
          
          console.error('Login error:', error);
        }
      };

    return (
        <>
            <CssBaseline />
            <Grid container sx={{
                flexGrow: 1,
                backgroundColor: '#0E4B5B',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Cuidacan" src="/cuidaCan.png" sx={{ mr: 1, width: 80, height: 80 }} />
                    </IconButton>
                    <Typography variant="h2" component="div" sx={{ flexGrow: 1, fontFamily: 'Nunito, sans-serif', fontWeight: 400 }}>
                        <span style={{ color: '#FFFFFF' }}>Cuida</span>
                        <span style={{ color: '#EFA60B' }}>Can</span>
                    </Typography>
                </Grid>

                <Grid sx={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
                    <Typography xs={12} sx={{
                        fontWeight: 800,
                        fontSize: 47,
                        fontFamily: 'Poppins, sans-serif',
                        color: '#FFF',
                        ml: 8,
                        mr: 8
                    }}>
                        Inicio de Sesión
                    </Typography>
                </Grid>

                <Grid autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '40%', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>

                    <TextField label='Correo' variant='filled' InputProps={InputProps} value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <TextField label='Contraseña' variant='filled' type='password' InputProps={InputProps} value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                </Grid>

                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '80%', mt: 5 }}>
                    <Button variant="contained"  sx={{ backgroundColor: '#EFA60B', width: '354px', height: '60px', borderRadius: 5, fontSize: '1.5', fontFamily: 'Poppins, sans-serif' }} onClick={handleLogin}>Iniciar sesión</Button>
                </Grid>


            </Grid>
        </>
    );
}
