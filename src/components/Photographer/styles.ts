import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: baseline;

  background: #fcf1d9;
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
    font-weight: 600;

    background: #f4ac53;
    padding: 10px 10px 8px 10px;
    border-radius: 6px;
  }

  p {
    margin: 10px 5px 0 5px;
  }

  p + p {
    margin-top: 5px;
  }

  button {
    padding: 13px 28px 12px 20px;
    margin: 15px auto 5px 5px !important;
  }

  @media (min-width: 600px) {
    width: 30.5%;
    margin: 10px;
  }
`;

export const Name = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
