import styled from 'styled-components';

export const Container = styled.button`
  position: relative;

  background: ${props => (props.color ? props.color : '#221f1f')};
  border: 0;

  padding: 20px 25px 18px 25px;

  color: white;

  clip-path: polygon(calc(100% - 25px) 0, 100% 15px, 100% 100%, 0 100%, 0 0);

  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  &::after {
    position: absolute;
    top: 2px;
    right: 2px;

    background: white;
    width: 23px;
    height: 14px;

    clip-path: polygon(0 0, 25% 100%, 100% 100%);

    content: '';
  }
`;
