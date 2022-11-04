import { Font } from '@/shared/styles';
import React from 'react';
import styled from '@emotion/styled';

export const InputContainer = styled.article<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;

  & > .discription {
    ${Font.title15}
    font-size:12px;
    font-weight: 100;
    padding-left: 5px;
  }
  & > input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 9px 12px;

    width: 100%;
    height: 40px;

    border: 1px solid #ddd;
    border-radius: 4px;

    outline: 0;
    &:focus,
    &:active {
      border-width: 2px;
      box-sizing: border-box;
    }
    &:disabled {
      background: #ddd;
      border: 1px solid #ddd;
      color: #ddd;
    }
    &::placeholder {
      color: #ddd;
    }
    &[error] {
      border: 1px solid red;
      & + span {
        font-size: 10px;
        color: red;
        padding-left: 5px;
      }
      &:focus,
      &:active {
        border-width: 2px;
        box-sizing: border-box;
      }
    }
  }
  & > textarea {
    resize: none;
    border: 1px solid $ddd;
    border-radius: 4px;
    outline: 0;

    &:focus,
    &:active {
      border-width: 2px;
      box-sizing: border-box;
    }
  }
`;
