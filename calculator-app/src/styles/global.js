import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spartan', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.mainBg};
    color: ${({ theme }) => theme.headerColor};
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    /* color: inherit; */
    font: inherit;
  }
`;
