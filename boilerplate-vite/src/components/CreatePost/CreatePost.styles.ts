import { Font } from '@/shared/styles';
import React from 'react';
import styled from '@emotion/styled';

export const CreatePostContainer = styled.main<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  max-width: 300px;
  gap: 20px;
  & > button {
    border: 1px solid #ddd;
    padding: 10px 20px;
  }
`;
