import styled from 'styled-components';

export const Container = styled.h2`
  color: #ec1c23;
  font-size: 22px;
  margin-bottom: 20px;

  p {
    margin-top: 5px;
    color: #ccc;
    font-weight: normal;
    font-size: 16px;
    font-style: italic;
  }

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
