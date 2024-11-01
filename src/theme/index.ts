// src/theme/index.ts
import { extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#6200ea',
    },
  },
  config: {
    // Define os temas claro e escuro
    initialColorMode: 'light', // Pode ser 'light' ou 'dark'
  },
});

export default theme;
