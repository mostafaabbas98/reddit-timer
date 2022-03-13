import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
 }

 li {
  list-style-type: none;
 }

 a {
  text-decoration: none;
  color: #000;
 }
`;

export default GlobalStyle;
