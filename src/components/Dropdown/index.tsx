import React, { HTMLAttributes, useState } from 'react';

import { Container } from './styles';

interface IDropdownProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const Dropdown: React.FC<IDropdownProps> = ({
  title = 'Insert the title in component props',
  children = '',
  ...props
}) => {
  const [visibleContent, setVisibleContent] = useState<boolean>();

  return (
    <Container {...props} onClick={() => setVisibleContent(!visibleContent)}>
      <span>{title}</span>
      {visibleContent && <p>{children}</p>}
    </Container>
  );
};

export default Dropdown;
