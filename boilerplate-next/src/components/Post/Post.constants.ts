import { Font } from '@/shared/styles';
import React from 'react';
import styled from '@emotion/styled';

export const PostContainer = styled.section<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 20px;
  max-width: calc(50% - 10px);

  & > .title {
    padding: 20px;
    ${Font.title15}
    text-transform: capitalize;
    border-bottom: 1px solid #ddd;
    white-space: pre;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  & > .body {
    padding: 20px;
    ${Font.title15}
    text-transform: capitalize;
  }
`;
