import React from 'react';
import GlobalTheme from './theme';
import { ThemeProvider } from '@mui/material/styles';

const GlobalThemeProvider = ({ children }: any) => (
  <ThemeProvider theme={GlobalTheme}>
    {children}
  </ThemeProvider>
);

export default GlobalThemeProvider;
