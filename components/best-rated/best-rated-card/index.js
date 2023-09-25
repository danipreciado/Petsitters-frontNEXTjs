import * as React from 'react';
import { Card, CardMedia, Typography, Grid, Box, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { StyledCard } from './styled-components';

export default function ImgMediaCard({review}) {
  return (
    <StyledCard sx={{ maxWidth: 280 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p={2}
      >
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              sx={{ borderRadius: '50%', width: '80px', height: '80px' }}
              image={review.petsitter.photoURL} 
            />
          </Grid>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="body1" component="div" sx={{color: 'white'}}>
                {review.petsitter.name} {review.petsitter.lastname} ({review.petsitter.age} ) años
              </Typography>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center" >
                <StarIcon color='secondary' />
                <StarIcon color='secondary' />
                <StarIcon color='secondary' />
                <StarIcon color='secondary' />
                <StarIcon color='secondary' />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ mt: 2}}> 
          <Paper elevation={3} sx={{ borderRadius: 3, backgroundColor: 'white', padding: 1 }}>
            <Typography variant="body3" color="text.secondary">
              {review.comments}
            </Typography>
          </Paper>
        </Grid>
      </Box>
    </StyledCard>
  );
}

