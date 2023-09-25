import React, { useState } from 'react';
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
