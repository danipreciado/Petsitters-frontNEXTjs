import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
  });


export default function HomeContent() {
   
    return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <main className={poppins.className}> */}
      <Grid container spacing={2} alignItems="center">
        <Grid xs={12} md={12} lg={6}>
          <Box
            sx={{
              fontWeight: 800,
              fontSize: 47,
              color: '#0E4B5B',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              mt: 8,
              ml: 8,
              mr: 8,
            }}
          >
            <div>
              Tus mascotas en las mejores manos.
            </div>
            
          </Box>

          <Box sx={{
              fontWeight: 400,
              fontSize: 18,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              ml: 8,
              mr: 8,
            }}>
          <div>
              Somos una empresa con más de 2,000 personas en el cuidado de tus mascotas.
            </div>
          </Box>
        </Grid>
        <Grid xs={12} md={12} lg={6} sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              mt: 2,
            }}>
          <img
            src="/cuidaCanHome.png"
            alt="Perros y personas"
            /* style={{ width: '50vw', height: '90vh' }} */
          />
        </Grid>
      </Grid>
     {/*  </main> */}
    </Box>

    
  );
}
