import { CreatePostContainer } from '@/components/CreatePost/CreatePost.styles';
import { REQUESTS_OPERATION } from '@/shared/constants/common.constants';
import React from 'react';
import useMutationPosts from './CreatePost.hooks';

const CreatePost = (): React.ReactElement => {
  const { mutate } = useMutationPosts();

  return (
    <CreatePostContainer>
      <button
        onClick={() => {
          mutate({
            operation: REQUESTS_OPERATION.POST,
            data: {
              title: '타이틀',
              body: '바디',
            },
            url: '/posts',
          });
        }}
      >
        전송
      </button>
    </CreatePostContainer>
  );
};

export default CreatePost;
