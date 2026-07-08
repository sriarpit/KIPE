import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0C2340',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#7A1F2B',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#D4AF37',
    },
    background: {
      default: '#FAF8F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#5C5C5C',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
