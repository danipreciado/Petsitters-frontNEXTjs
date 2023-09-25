import React from 'react';
import { InputAdornment } from '@mui/material';
import { StyledSearchBar } from './styled-components';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/reducers';

export default function SearchBar({placeholder, icon, onClick}) {

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    dispatch(setSearchQuery(searchValue));
  };
  return (
    <div onClick={onClick}>
      <StyledSearchBar
        disableUnderline={true}
        id="searchbar"
        placeholder={placeholder} 
        onChange={handleSearchChange}
        startAdornment={
          <InputAdornment position="start">
            {icon && icon}
          </InputAdornment>
        }
      />
      
    </div>
  );
}
