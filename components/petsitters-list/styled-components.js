import { TableRow, Table, TableCell } from "@mui/material";
import { styled } from "@mui/material";


export const StyledRow = styled(TableRow)(({ theme }) => ({
    borderRadius: '10px',
    backgroundColor: theme.palette.fill.default,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    '& img': {
        borderRadius: '50%',
      },
    
}));

export const StyledTable = styled(Table)(({ theme }) => ({
    borderRadius: '10px',
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
    borderCollapse: 'separate',  
    borderSpacing: '0px 10px', 
 
}));

export const StyledCell = styled(TableCell)(({ theme }) => ({
   fontFamily: theme.typography.fontFamily, 
  
}));

