import styled from 'styled-components';

export const Container = styled.div`
  background: #060606;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* height: 90vh; */

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    flex-direction: column-reverse;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }

  & + & {
    text-align: right;
  }

  transition: 0.2s;
  color: #060606;
  &:hover {
    color: #827f82;
  }

  @media (min-width: 600px) {
    &:first-child {
      flex-direction: column;
      margin: 0;
      padding: 0;
      margin-right: 5px;
      padding-right: 5px;
    }
  }
`;

export const Photo = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const PhotoInfo = styled.div`
  padding: 15px;

  .nothing {
    opacity: 0;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60px;
    margin: 15px 0;
    cursor: pointer;
  }

  @media (min-width: 600px) {
    img {
      width: 70px;
    }
  }
`;
