import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body{
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
  a{
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
  }
  strong{
    font-weight: bold;
  }
  #app{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default GlobalStyle;
