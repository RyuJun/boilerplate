import { Hydrate, QueryClientProvider } from 'react-query';

import { Global } from '@emotion/react';
import { GlobalStyles } from '@/shared/styles/global';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import i18n from '@/locales/i18n';
import queryClient from '@/shared/configs/queryClient';

const App = ({ Component, pageProps }): React.ReactElement => {
  const env = process.env.NODE_ENV;
  return (
    <>
      <Head>
        <title>Boilerplate Next</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <Global styles={GlobalStyles} />
          {env === 'development' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </I18nextProvider>
    </>
  );
};

export default App;
