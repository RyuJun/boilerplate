import create from 'zustand';

export interface IExampleStore {
  example: string;
  setExample: (props: string) => void;
}

export const useExampleStore = create<IExampleStore>((set) => ({
  example: '',
  setExample: (props: string) => set(() => ({ example: props })),
}));
