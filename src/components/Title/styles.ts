import styled from 'styled-components';

export const Container = styled.h1`
  color: #ec1c23;
  font-size: 26px;
  margin-bottom: 20px;

  p + & {
    margin-top: 20px;
  }

  ul + & {
    margin-top: 40px;
  }

  div + & {
    margin-top: 40px;
  }
`;
