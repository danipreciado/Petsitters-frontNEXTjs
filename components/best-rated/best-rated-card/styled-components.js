import { Card } from "@mui/material";
import { styled } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    maxWidth: 300,
    borderRadius: '15px'
}));
