import { createTheme } from '@mui/material/styles';
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
  });


const theme = createTheme({
  palette: {
    primary: {
      main: '#0E4B5B',
    },
    secondary: {
      main: '#EFA60B',
      light: '#FFF5E1'
    },
    fill: {
      default: '#FFFFFF'
    },
    background: {
      default: '#FFF5E1',
      register: '#0E4B5B',
    },
  },
  typography: {
    fontFamily: poppins,
    h2: {
      fontWeight: 700,
      fontSize: 24,
    },
    h3: {
      fontWeight: 700,
      fontSize: 16,
    },
    h6: {
      fontWeight: 500,
      fontSize: 14,
    },
    h7: {
      fontWeight: 800,
      fontSize: 24,
      fontFamily: poppins,
    },
    h8: {
      fontWeight: 400,
      fontSize: 16,
      fontFamily: poppins,
    },
    body1: {
      fontWeight: 300,
      fontSize: 14
    },
    body3: {
      fontWeight: 300,
      fontSize: 10
    }
},

});

export default theme;