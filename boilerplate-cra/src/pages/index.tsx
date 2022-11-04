import { HomeContainer, getExampleState, setExampleState } from '@/shared/styles/pages';
import React, { useEffect } from 'react';

import Posts from '@/components/Posts/Posts';
import { useExampleStore } from '@/stores/useExampleStore';

const Home = (): React.ReactElement => {
  const example = useExampleStore(getExampleState);
  const setExample = useExampleStore(setExampleState);
  useEffect(() => setExample('Durian CRA exmaple'), []);
  return (
    <HomeContainer>
      <h1>{example}</h1>
      <Posts />
    </HomeContainer>
  );
};

export default Home;
