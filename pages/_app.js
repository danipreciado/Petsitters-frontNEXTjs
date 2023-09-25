import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
/* import { configureStore } from "@reduxjs/toolkit"; */
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./theme";
import { Poppins } from "next/font/google";
import store from '../redux/store'
import { persistor } from "../redux/store";


const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function MyApp({ Component }) {
  return (
    <main className={poppins.className}>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component />
        </ThemeProvider>
        </PersistGate>
      </Provider>
    </main>
  );
}

export default MyApp;
