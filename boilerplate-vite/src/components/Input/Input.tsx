import { InputContainer } from './Input.styles';
import React from 'react';

const Input = ({ ...props }): React.ReactElement => {
  const { error, discription } = props;
  return (
    <InputContainer>
      <div className="discription">{discription}</div>
      <input {...props} className="font__body_sm" />
      {error && <span className="font__s_small">{error}</span>}
    </InputContainer>
  );
};
export default Input;
