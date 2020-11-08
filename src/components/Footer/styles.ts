import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;

  background: white;
  border-top: 1px solid black;
  padding: 15px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    color: #221f1f;
  }

  a + a {
    margin-left: 15px;
  }

  @media (min-width: 600px) {
    flex-direction: row;

    div {
      margin-top: 10px;
    }

    img {
      margin: unset;
      margin-right: 50px;
    }
  }
`;
