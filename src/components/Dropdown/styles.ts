import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: baseline;

  background: #ffebe8;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  span {
    color: white;
    text-align: center;
    font-weight: 600;

    background: #fc9788;
    padding: 10px 0 8px 0;
    border-radius: 6px;
  }

  p {
    margin: 5px 5px 0 5px;
  }

  p + p {
    margin-top: 5px;
  }

  @media (min-width: 600px) {
    width: 30.5%;
    margin: 10px;
  }
`;
