import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { gowidGreen, gowidMango, gowidObsidian } from '../style/color';

const GlobalTheme = createTheme({
  typography: {
    fontFamily: [
      'Spoqa Han Sans Neo \,sans-serif',
      'Noto Sans KR',
    ].join(','),
  },
  palette: {
    primary: {
      main: gowidGreen.default,

    },
    secondary: {
      main: gowidMango.default,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          fontSize: 14
        },
        containedPrimary: {
          color: gowidObsidian[100]
        },
      }
    }
  }
});
export default GlobalTheme;
