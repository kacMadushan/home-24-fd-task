import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './typography';

export const GlobalStyle = createGlobalStyle`
  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.5;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%; 
  }

  ol, ul {
	  list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  body {
    background-color: #f0f3f5;
    font-family: ${primaryFont};
  }
`;