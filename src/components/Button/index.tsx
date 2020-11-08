import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  color?: string;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({ color, children, onClick }) => {
  return (
    <Container type="button" color={color} onClick={onClick}>
      <h4>{children}</h4>
    </Container>
  );
};

export default Button;
