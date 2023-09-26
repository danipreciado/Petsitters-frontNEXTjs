/* import React, { useState } from 'react';
import Link from 'next/link';
import { Drawer, Box, ListItemButton, ListItemIcon, Divider } from '@mui/material';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { StyledTypography } from './styled-components';
import { logout } from '../../redux/authReducers';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import UserCard from '../user-card/index'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../pages/register-theme';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], })


export default function SideBar({ open, onClose }) {
  
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    router.push('/');

  };

  return (

    <div className={poppins.className}>
      <ThemeProvider theme={theme} >

        <Drawer
          anchor="left"
          open={open}
          onClose={onClose}

        >
          <Box sx={{
            height: 0.2,
            backgroundColor: theme.palette.secondary.light,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: poppins.style.fontFamily,
            fontWeight: '800'

          }}>
            <UserCard />
          </Box>
          <Box sx={{
            p: 4,
            height: 1,
            width: 300,
            backgroundColor: "#fff"
          }}>
            <Box mb={50} >
              <ListItemButton>
                <ListItemIcon>
                  <LocalPostOfficeIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <StyledTypography color={theme.palette.primary.main} variant='h7'  sx={{fontFamily: poppins.style.fontFamily}}>Mensajes</StyledTypography>
              </ListItemButton>

              <ListItemButton component={Link} href="/cuidadores">
                <ListItemIcon>
                  <GroupsIcon sx={{ color: "primary.main" }} />
                </ListItemIcon >
                <StyledTypography color={theme.palette.primary.main} variant='h7'  sx={{fontFamily: poppins.style.fontFamily}}>Cuidadores</StyledTypography>
              </ListItemButton>

              <ListItemButton  >
                <ListItemIcon>
                  <CalendarMonthIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <StyledTypography color={theme.palette.primary.main} variant='h7'  sx={{fontFamily: poppins.style.fontFamily}}>Agendados</StyledTypography>
              </ListItemButton>
            </Box>

            <Divider light />

            <ListItemButton onClick={handleLogout} >
              <ListItemIcon>
                <ExitToAppIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <StyledTypography color={theme.palette.primary.main} variant='h7' sx={{fontFamily: poppins.style.fontFamily}}>Cerrar sesión</StyledTypography>
            </ListItemButton>

          </Box>
        </Drawer>

      </ThemeProvider>

    </div>

  );
}
 */

import React from 'react';
import Link from 'next/link';
import { Drawer, Box, ListItemButton, ListItemIcon, Divider, Button, Avatar, Grid, Typography } from '@mui/material';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { StyledTypography } from './styled-components';
import { logout } from '../../redux/authReducers';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../user-card/index';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../pages/register-theme';
import { Poppins } from 'next/font/google';
import { authSelector } from '../../redux/authReducers';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export default function SideBar({ open, onClose }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector(authSelector);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    router.push('/');
  };

  return (
    <div className={poppins.className}>
      <ThemeProvider theme={theme}>
        <Drawer anchor="left" open={open} onClose={onClose}>
          <Box
            sx={{
              height: 0.2,
              backgroundColor: theme.palette.secondary.light,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: poppins.style.fontFamily,
              fontWeight: '800',
            }}
          >
            {auth ? (
              <UserCard />
            ) : (
                <Grid container alignItems='center' justifyContent='center'>
                  <Grid item>
                     <Avatar alt="Cuidacan" src="/cuidaCan.png" sx={{ mr: 1 }} />
                  </Grid>
                  <Grid item>
                  <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>
                    <span style={{ color: '#0E4B5B' }}>Cuida</span>
                    <span style={{ color: '#EFA60B' }}>Can</span>
                  </Typography>
                  </Grid>
                </Grid>
              
            )}
          </Box>
          <Box
            sx={{
              p: 4,
              height: 1,
              width: 300,
              backgroundColor: '#fff',
            }}
          >
            {auth ? (
              <Box mb={50}>
                <ListItemButton>
                  <ListItemIcon>
                    <LocalPostOfficeIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <StyledTypography
                    color={theme.palette.primary.main}
                    variant="h7"
                    sx={{ fontFamily: poppins.style.fontFamily }}
                  >
                    Mensajes
                  </StyledTypography>
                </ListItemButton>

                <ListItemButton component={Link} href="/cuidadores">
                  <ListItemIcon>
                    <GroupsIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <StyledTypography
                    color={theme.palette.primary.main}
                    variant="h7"
                    sx={{ fontFamily: poppins.style.fontFamily }}
                  >
                    Cuidadores
                  </StyledTypography>
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <CalendarMonthIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <StyledTypography
                    color={theme.palette.primary.main}
                    variant="h7"
                    sx={{ fontFamily: poppins.style.fontFamily }}
                  >
                    Agendados
                  </StyledTypography>
                </ListItemButton>
                

                <Divider light />

                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon>
                    <ExitToAppIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <StyledTypography
                    color={theme.palette.primary.main}
                    variant="h7"
                    sx={{ fontFamily: poppins.style.fontFamily }}
                  >
                    Cerrar sesión
                  </StyledTypography>
                </ListItemButton>
              </Box>
            ) : (
              // Render signup and login buttons if not logged in
              <Box>
                <ListItemButton component={Link} href="/registro">
                  <ListItemIcon>
                    <PersonAddIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <StyledTypography
                    color={theme.palette.primary.main}
                    variant="h7"
                    sx={{ fontFamily: poppins.style.fontFamily }}
                  >
                    Regístrate
                  </StyledTypography>
                </ListItemButton>
                <ListItemButton component={Link} href="/iniciodesesion">
                  <ListItemIcon>
                    <LoginIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <StyledTypography
                    color={theme.palette.primary.main}
                    variant="h7"
                    sx={{ fontFamily: poppins.style.fontFamily }}
                  >
                    Iniciar Sesión
                  </StyledTypography>
                </ListItemButton>
              </Box>
            )}
          </Box>
        </Drawer>
      </ThemeProvider>
    </div>
  );
}
