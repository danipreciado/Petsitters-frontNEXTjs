import { Provider } from 'react-redux';
import BestRated from '../../components/best-rated/index';
import Navbar from '../../components/navbar';
import PetsittersTable from '../../components/petsitters-list';
import PetsittersSearchNav from '../../components/petsitters-search-nav';
import { Grid } from '@mui/material';

export default function Petsitters() {
  return (
    <> 
      
      <Navbar />
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={8} sx={{flexGrow: 1}} >
          <PetsittersSearchNav />
          <PetsittersTable />
        </Grid>
        <Grid container item xs={12} sm={3} justifyContent="center" alignItems="center">
          <BestRated />
        </Grid>
      </Grid>
     
    </>
  );
}