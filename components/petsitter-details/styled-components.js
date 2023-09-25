import { Button } from "@mui/material";
import { styled } from "@mui/material";

export const StyledButton1 = styled(Button)(({ theme }) => ({
    backgroundColor:'#EFA60B', 
    width:'350px', 
    height:'60px', 
    borderRadius: '20px', 
    fontWeight: 'bold',
    fontSize: '20px',
    fontFamily: theme.typography.fontFamily, 
    marginTop: '2rem'
    
}));

export const StyledButton2 = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main, 
    width:'350px', 
    height:'60px', 
    borderRadius: '20px', 
    fontWeight: 'bold',
    fontSize: '20px',
    fontFamily: theme.typography.fontFamily, 
    
}));