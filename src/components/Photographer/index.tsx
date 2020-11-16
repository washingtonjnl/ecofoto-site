import React, { HTMLAttributes, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';

import DetailedButton from '../DetailedButton';

import { Container, Name } from './styles';

interface IPhotographerProps extends HTMLAttributes<HTMLDivElement> {
  photographerId: number;
  name?: string;
}

const Photographer: React.FC<IPhotographerProps> = ({
  photographerId,
  name = "Insert the photographer's name in component props",
  children = '',
  ...props
}) => {
  const [visibleContent, setVisibleContent] = useState<boolean>();

  const history = useHistory();

  const handleNavigate = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history],
  );

  return (
    <Container {...props} onClick={() => setVisibleContent(!visibleContent)}>
      <Name>
        {name}
        {visibleContent ? (
          <FaMinusSquare size={24} />
        ) : (
          <FaPlusSquare size={24} />
        )}
      </Name>
      {visibleContent && (
        <>
          <p>{children}</p>
          <DetailedButton
            onClick={() => {
              handleNavigate(`participante?id=${photographerId}`);
            }}
          >
            ver galeria individual
          </DetailedButton>
        </>
      )}
    </Container>
  );
};

export default Photographer;
