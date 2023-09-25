import Navbar from '../../components/navbar';
import { useRouter } from 'next/router';
import ImageCarousel from '../../components/carousel';
import PetsitterDetails from '../../components/petsitter-details/index';
import { Grid } from '@mui/material';
import PetsitterReviews from '../../components/petsitter-reviews';

export default function Petsitters() {

  const router = useRouter();
  const { id } = router.query; 

  return (
    <>   
      <Navbar />
      <Grid container spacing={1} mt={2}>
        <Grid container item xs={12} sm={8} justifyContent="center" alignItems="flex-start">
          <ImageCarousel />
          <PetsitterReviews petsitterId={id}/>
        </Grid>
        <Grid container item xs={12} sm={4} justifyContent="center" alignItems="center">
          <PetsitterDetails petsitterId={id} />
        </Grid>
      </Grid>
    </>
  );
}
