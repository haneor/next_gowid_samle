import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalThemeProvider from '../src/common/globalThemeContainer/global_theme';
import { Provider } from 'react-redux';
import { stores } from '../src/stores';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={stores}>
      <React.Fragment>
        <GlobalThemeProvider>
          <Component {...pageProps} />
        </GlobalThemeProvider>
      </React.Fragment>
    </Provider>
  );
}
export default MyApp
