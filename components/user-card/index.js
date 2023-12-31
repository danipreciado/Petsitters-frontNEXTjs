import React from 'react';
import { useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { authSelector } from "../../redux/authReducers";




const UserCard = () => {
  
  const auth = useSelector(authSelector);

  
  let name = auth ? auth.name : '';
  let lastname = auth ? auth.lastname : '';
  let email = auth ? auth.email : '';
  let photoURL = auth ? auth.photoURL : '';



  return (
    <Box >
      <Grid container mt={1}>
        <Grid item mr={2} mt={1}>
        <Avatar alt='test' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU'  />
        </Grid>
         <Grid item>
         <Typography variant="h7">{name} {lastname}</Typography>
      <Typography variant="body2" color="#52C1AD">
       {email}
      </Typography>
        </Grid>

      </Grid>
      
    
    </Box>
  );
};

export default UserCard;
