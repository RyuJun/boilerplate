import create from 'zustand';

interface IExampleStore {
  example: string;
  setExample: (props) => void;
}

export const useExampleStore = create<IExampleStore>((set) => ({
  example: '',
  setExample: (props: string) => set(() => ({ example: props })),
}));
