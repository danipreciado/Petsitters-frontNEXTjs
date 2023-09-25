import React, { useState, useEffect } from 'react';
import ImgMediaCard from "./best-rated-card/index";
import { Paper, Typography, Box } from '@mui/material';
import theme from '../../pages/theme';
import { getToken } from '../../utils/auth';

export default function BestRated() {
  const [topReviews, setTopReviews] = useState([]);

  useEffect(() => {
    try {
  
      const headers = {
        'Authorization': `${getToken()}`,
        'Content-Type': 'application/json',
      };
  
      fetch('http://localhost:5500/api/reviews/bestrated', {
        method: 'GET',
        headers: headers,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setTopReviews(data);
        })
        .catch((error) => {
          console.error('Error fetching top reviews:', error);
        });
    } catch (error) {
      console.error('Error fetching top reviews:', error);
    }
  }, []);
  

  return (
    <Paper elevation={3} sx={{
      borderRadius: 5,
      backgroundColor: 'white',
      padding: 2,
      maxWidth: 350,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', 
      height: '80vh',
      marginTop: '2rem',
      marginLeft: '2rem'
    }}>
      <Typography variant="h7" sx={{ color: theme.palette.primary.main, textAlign: 'center' }}>
        Los mejores valorados
      </Typography>
      <Box sx={{ maxHeight: '100%', overflowY: 'auto', '& > *': { marginBottom: 2 } }}>
       {topReviews.map((review) => (
          <ImgMediaCard key={review.id} review={review} />
        ))}
      </Box>
    </Paper>
  );
}
