import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 25px 15px;

  display: flex;
  flex-direction: column;
  flex: 1;

  button {
    margin: 20px auto;
  }
`;

export const Editions = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    margin: 0 -15px;
  }
`;

export const Edition = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background: #f0f0f0;
  padding: 20px 30px 20px 20px;
  border-radius: 10px;

  color: #ec1c23;

  cursor: pointer;
  transition: 0.2s;

  & + & {
    margin-top: 15px;
  }

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 50px;
  }

  h4 {
    margin: 0 20px;
    flex: 1;
  }

  svg {
    margin-top: -3px;
    color: #b7b7b7;
  }

  @media (min-width: 600px) {
    margin: 15px;
    width: 31%;
  }
`;
