import { Control, UseControllerProps } from 'react-hook-form';

export type Nullable<T> = T | null;

export interface IQueryKeyProps {
  queryKey: string;
}

export interface IResponseError {
  message?: string;
}

export type TOperation = 'get' | 'post' | 'patch' | 'put' | 'delete';

export interface IMutationProps {
  operation: TOperation;
  data?: unknown;
  headers?: any;
  url: string;
  meta?: object;
}

export interface IVariables {
  data?: object;
  operation?: string;
  url?: string;
  meta?: object;
}
export interface IContext {
  key?: string | string[];
  onSuccess?: (...props: any) => void;
  onError?: (...props: any) => void;
}

export interface HookFormProps {
  name?: string;
  control: any;
  rules?: UseControllerProps['rules'];
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  [key: string]: any;
}
