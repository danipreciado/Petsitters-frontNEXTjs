import React, { useState } from 'react';
import Link from 'next/link';
import { Drawer, Box, ListItemButton, ListItemIcon, Divider} from '@mui/material';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import theme from '../../pages/theme';
import { StyledTypography } from './styled-components';
import { logout } from '../../redux/authReducers';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

export default function SideBar({ open, onClose }) {
    
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    router.push('/');
    
  };
  
  return (
    
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            
        >
            <Box sx={{
                height: 0.2,
                backgroundColor: theme.palette.secondary.light,
                fontFamily: theme.typography.fontFamily

            }}></Box>
            <Box  sx={{
                p: 4,
                height: 1,
                width: 300,
                backgroundColor: "#fff",
                fontFamily: theme.typography.fontFamily
            }}>
                 <Box mb={50} >
                    <ListItemButton>
                      <ListItemIcon>
                        <LocalPostOfficeIcon sx={{color: "primary.main"}}/>
                      </ListItemIcon>
                      <StyledTypography color={theme.palette.primary.main} variant='h7'>Mensajes</StyledTypography>
                    </ListItemButton>

                    <ListItemButton component={Link} href="/cuidadores">
                      <ListItemIcon>
                        <GroupsIcon sx={{color: "primary.main"}}/>
                      </ListItemIcon >
                      <StyledTypography color={theme.palette.primary.main} variant='h7'>Cuidadores</StyledTypography>
                    </ListItemButton>

                    <ListItemButton  >
                      <ListItemIcon>
                        <CalendarMonthIcon sx={{color: "primary.main"}} />
                      </ListItemIcon>
                      <StyledTypography color={theme.palette.primary.main} variant='h7' >Agendados</StyledTypography>
                    </ListItemButton>
                  </Box>

                  <Divider light />

                  <ListItemButton  onClick={handleLogout} >
                      <ListItemIcon>
                        <ExitToAppIcon sx={{color: "primary.main"}} />
                      </ListItemIcon>
                      <StyledTypography color={theme.palette.primary.main} variant='h7'>Cerrar sesión</StyledTypography>
                    </ListItemButton>

            </Box>
        </Drawer>
       
    );
}
