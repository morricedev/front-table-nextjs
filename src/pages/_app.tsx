import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';

import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Be mobile</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
        <NextNprogress
          color={theme.colors.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
