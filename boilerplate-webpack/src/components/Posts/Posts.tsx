import Post from '@/components/Post/Post';
import { PostsContainer } from '@/components/Posts/Posts.constants';
import React from 'react';
import useQueryPosts from '@/components/Posts/Posts.hook';

const Posts = () => {
  const { data, isFetching, isLoading, isError } = useQueryPosts();

  if (isLoading || isFetching) return <>loading</>;
  if (isError) return <>Error</>;

  return (
    <PostsContainer>
      {data.map((item) => (
        <Post key={item.id} title={item.title} body={item.body} id={item.id} userId={item.userId} />
      ))}
    </PostsContainer>
  );
};

export default Posts;
