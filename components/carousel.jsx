import React from 'react';
import { Box, Paper, Container, Card, CardMedia } from '@mui/material';
import { styled } from "@mui/material";

const StyledContainer = styled(Container)(({ theme }) => ({
   width: 'auto',
}));

export default function ImageCarousel() {
  return (
    <StyledContainer sx={{maxWidth:"none"}}>
      <Paper
        elevation={10}
        sx={{
          borderRadius: 5,
          backgroundColor: 'white',
          padding: 2,
          display: 'flex',
          flexWrap: 'nowrap',
          maxWidth: '700px',
          marginTop: '2rem',
          overflowX: 'auto', 
          '&::-webkit-scrollbar': {
            display: 'none', 
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            '& > *': {
              flex: '0 0 auto', 
              marginRight: 2,
            },
          }}
        >
          <Card>
        <CardMedia
          component="img"
          alt="Image 1"
          height="300"
          image="/image1.png"
        />
      </Card>
      <Card>
        <CardMedia
          component="img"
          alt="Image 2"
          height="300"
          image="/image2.png"
        />
      </Card>
      <Card>
        <CardMedia
          component="img"
          alt="Image 3"
          height="300"
          image="/image3.png"
        />
      </Card>
          
        </Box>
      </Paper>
    </StyledContainer>
  );
}
