import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { authSelector } from '../redux/authReducers.js';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './side-bar/index.jsx';
import UserCard from './user-card/index.js'

export default function Navbar() {
  const router = useRouter();

  const auth = useSelector(authSelector);
  let user = auth ? auth.name : '';
  
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0E4B5B', height: '10vh' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <IconButton sx={{ p: 0 }} onClick={() => router.push('/')}>
            <Avatar alt="Cuidacan" src="/cuidaCan.png" sx={{ mr: 1 }} />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>
            <span style={{ color: '#FFFFFF' }}>Cuida</span>
            <span style={{ color: '#EFA60B' }}>Can</span>
          </Typography>

          {user ? (
  <UserCard /> 
) : (
  
  <>
    <Button color="inherit" onClick={() => router.push('/iniciodesesion')}>
      Iniciar Sesión
    </Button>
    <Typography variant="h6" component="div">
      |
    </Typography>
    <Button color="inherit" onClick={() => router.push('/registro')}>
      Regístrate
    </Button>
  </>
)}
       


      <SideBar open={open} onClose={handleDrawerToggle} />

    </Toolbar>
      </AppBar>
    </Box>
  );
}

