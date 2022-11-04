import { IContext, IVariables } from '@/shared/types/common.types';

import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
    mutations: {
      onMutate: (data: IContext) => data,
      onSuccess: async (data, variables: IVariables, context: IContext) => {
        const { key, onSuccess } = context;
        if (onSuccess) onSuccess(data, variables);
        if (Array.isArray(key)) {
          await key.forEach((item) => {
            queryClient.invalidateQueries(item, { exact: true });
          });
        } else {
          await queryClient.invalidateQueries(key, { exact: true });
        }
      },
      onError: (error, variables: IVariables, context: IContext) => {
        const { onError } = context;
        if (onError) onError(error, variables);
      },
    },
  },
});
export default queryClient;
