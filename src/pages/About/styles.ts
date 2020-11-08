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

export const List = styled.ul`
  list-style: outside;
  margin-left: 18px;
`;

export const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    margin: 0 -10px;
  }
`;

export const Point = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background: #ffebe8;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;

  span {
    color: white;
    text-align: center;
    font-weight: 600;

    background: #fc9788;
    padding: 10px 0 8px 0;
    border-radius: 6px;
    margin-bottom: 15px;
  }

  p {
    margin: 0 5px;
  }

  p + p {
    margin-top: 5px;
  }

  @media (min-width: 600px) {
    width: 30.5%;
    margin: 10px;
  }
`;

export const Photographer = styled.div`
  &:not(:first-child) {
    margin-bottom: 20px;
  }

  span {
    color: #ec1c23;
    font-size: 20px;
  }

  p {
    margin-top: 10px;
  }
`;
