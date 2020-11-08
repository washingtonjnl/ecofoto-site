import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface IDetailedButton extends HTMLAttributes<HTMLButtonElement> {
  color?: string;
  onClick: () => void;
}

const DetailedButton: React.FC<IDetailedButton> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <Container type="button" onClick={onClick} color={color}>
      <h4>{children}</h4>
    </Container>
  );
};

export default DetailedButton;
