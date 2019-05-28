import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  html {
    font-family: 'Roboto', 'Helvetica', sans-serif;

    body {
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
    }
  }
`;

export default Theme;
