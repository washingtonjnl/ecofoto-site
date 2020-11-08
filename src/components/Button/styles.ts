import styled from 'styled-components';

export const Container = styled.button`
  background: ${props => (props.color ? props.color : '#221f1f')};
  border: 0;

  padding: 10px 20px;

  color: white;

  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;
