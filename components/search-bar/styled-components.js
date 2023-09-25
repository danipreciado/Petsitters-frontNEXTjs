import { Input, Typography } from "@mui/material";
import { styled } from "@mui/material";

export const StyledSearchBar = styled(Input)(({ theme }) => ({
    border: '2px solid black',
    borderRadius: '10px',
    backgroundColor: theme.palette.fill.default,
    paddingLeft: '20px',
    width: '332px',
    height: '49px'
}));
