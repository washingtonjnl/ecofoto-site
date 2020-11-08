import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;

  padding: 15px 25px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: #221f1f;

  color: white;

  svg {
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 600px) {
    padding: 0;
    justify-content: space-between;
  }
`;

export const Navigation = styled.nav`
  max-width: 1440px;
  margin: 0 auto;

  position: absolute;
  top: 100%;
  right: 0;

  background: #221f1f;

  @media (min-width: 600px) {
    position: unset;

    ul {
      display: flex;
      list-style: none;
    }
  }
`;

export const NavItem = styled.li`
  padding: 15px 25px;
  padding-right: 55px;
  list-style: none;

  border-top: solid 1px #ccc;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    background: #333030;
  }

  ${props =>
    props.id === window.location.pathname.substr(1) &&
    css`
      background: white;
      color: #221f1f;

      &:hover {
        background: #f2f2f2;
      }
    `}

  @media (min-width: 600px) {
    border-top: 0;
    padding: 20px 40px;
    transition: 0.3s;

    text-align: center;
  }
`;
