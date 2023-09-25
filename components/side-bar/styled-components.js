import { Typography, Drawer } from "@mui/material";
import { styled } from "@mui/material";

export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.fontFamily
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    fontFamily: theme.typography.fontFamily
}));