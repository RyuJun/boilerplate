import { IExampleStore } from '@/stores/useExampleStore';

export const getExampleState = (store: IExampleStore) => store.example;
export const setExampleState = (store: IExampleStore) => store.setExample;
