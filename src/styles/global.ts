import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  body, button, input, textarea {
    background: white;
    color: #2a2a2a;
    -webkit-font-smoothing: antialiased;
    font-family: Calibri, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
  }

  h1, h2, h3, h4, h5, h6, strong, b {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
