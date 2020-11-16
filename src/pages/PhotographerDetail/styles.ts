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
  align-items: flex-start;
  flex: 1;

  img {
    width: 80px;
    margin-bottom: 35px;
  }

  button {
    margin: 20px auto;
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 600px) {
    margin: 0 -10px;
  }
`;

export const Photo = styled.div`
  margin-bottom: 25px;

  img {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 600px) {
    width: calc(50% - 20px);
    margin: 10px;
    margin-bottom: 25px;
  }
`;
