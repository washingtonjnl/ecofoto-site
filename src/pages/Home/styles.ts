import styled from 'styled-components';

import desktopGraphics from '../../assets/images/desktop-graphics.svg';
import graphics from '../../assets/images/graphics.svg';

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
  padding: 0 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  background: url(${graphics}) right 115% no-repeat;

  img {
    margin: 35px 0 30px 0;
  }

  button {
    margin-bottom: 75px;
  }

  @media (min-width: 600px) {
    background: url(${desktopGraphics}) 95% center no-repeat;
    background-size: contain;
    padding: 0 15px 0 65px;

    justify-content: center;

    img {
      width: 170px;
      margin: 0;
      margin-bottom: 50px;
    }

    button {
      margin: 0;
    }
  }
`;

export const Headings = styled.div``;
