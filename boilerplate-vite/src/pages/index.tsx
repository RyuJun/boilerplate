import React, { useEffect } from 'react';
import { getExampleState, setExampleState } from '@/shared/constants/pages';

import CreatePost from '@/components/CreatePost/CreatePost';
import { HomeContainer } from '@/shared/styles/pages';
import { Link } from 'react-router-dom';
import Posts from '@/components/Posts/Posts';
import { useExampleStore } from '@/stores/useExampleStore';

const Home = (): React.ReactElement => {
  const example = useExampleStore(getExampleState);
  const setExample = useExampleStore(setExampleState);
  useEffect(() => setExample('Durian Vite exmaple'), []);
  return (
    <HomeContainer>
      <h1>{example}</h1>
      <Link to="/validation">Validation Example</Link>
      <CreatePost />
      <Posts />
    </HomeContainer>
  );
};

export default Home;
