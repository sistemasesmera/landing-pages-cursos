// src/theme.js o src/theme.ts
import { createTheme } from "@mui/material/styles";
import "@fontsource/montserrat";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Roboto", sans-serif',
  },
  // Aquí puedes agregar más configuraciones si lo deseas
});

export default theme;
