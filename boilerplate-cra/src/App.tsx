import CustomRouter from '@/Routes';
import { Global } from '@emotion/react';
import { GlobalStyles } from '@/shared/styles';
import { I18nextProvider } from 'react-i18next';
import { QueryClientProvider } from 'react-query';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import i18n from '@/locales/i18n';
import queryClient from '@/shared/configs/queryClient';

const App = (): React.ReactElement => {
  const env = process.env.NODE_ENV;
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <Global styles={GlobalStyles} />
        {env === 'development' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
        <CustomRouter />
      </QueryClientProvider>
    </I18nextProvider>
  );
};

export default App;
