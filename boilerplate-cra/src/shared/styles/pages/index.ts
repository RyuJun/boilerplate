import React from 'react';
import styled from '@emotion/styled';

export const HomeContainer = styled.main<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  gap: 30px;
`;

export const getExampleState = (store) => store.example;
export const setExampleState = (store) => store.setExample;
