import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from './search-bar/index';
import { setSearchType } from '../redux/reducers';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';

export default function PetsittersSearchNav() {
  const dispatch = useDispatch();

  

  const handleSearchTypeChange = (type) => {
   
    dispatch(setSearchType(type));
  };
  
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mt={2}
    >
      <Grid item>
        <SearchBar placeholder='Buscar cuidador' icon={<SearchIcon />} onClick={() => handleSearchTypeChange('name')} />
      </Grid>
      <Grid item>
        <SearchBar placeholder='Ubicación, Ciudad, Estado' icon={<PlaceIcon />}  onClick={() => handleSearchTypeChange('city')} />
      </Grid>
    </Grid>
  );
}

