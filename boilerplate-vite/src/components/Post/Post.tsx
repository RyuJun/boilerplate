import { IPost } from '@/components/Post/Post.types';
import { PostContainer } from '@/components/Post//Post.styles';
import React from 'react';

const Post = ({ ...props }: IPost): React.ReactElement => {
  const { title, body, id } = props;

  return (
    <PostContainer>
      <div className="title">
        {id}. {title}
      </div>
      <div className="body">{body}</div>
    </PostContainer>
  );
};

export default Post;
