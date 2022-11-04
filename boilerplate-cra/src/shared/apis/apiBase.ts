import axios, { AxiosRequestConfig } from 'axios';

import { IMutationProps } from '@/shared/types/common.types';
import { REQUESTS_OPERATION } from '@/shared/constants/common.constants';
import merge from 'lodash/merge';

const apiBase = function (defaultConfig: AxiosRequestConfig) {
  const api = axios.create(defaultConfig);

  function configure(config: AxiosRequestConfig): AxiosRequestConfig {
    return merge(api.defaults, config);
  }

  async function get<T>(url: string, config?: any): Promise<T> {
    const response = await api.get(url, { ...config });
    return response.data as T;
  }

  async function mutation(config: IMutationProps) {
    const { operation, data, headers, url } = config;

    switch (operation) {
      case REQUESTS_OPERATION.PATCH:
        return await api.patch(url, data);
      case REQUESTS_OPERATION.POST:
        return await api.post(url, { data }, { headers });
      case REQUESTS_OPERATION.DELETE:
        return await api.delete(url, { headers, data });
      default:
        break;
    }
  }

  return { configure, get, mutation };
};

export default apiBase;
