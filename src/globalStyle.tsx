import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface ThemeInterface {
  theme: {
    body: string;
    text: string;
    toggleBackground: string;
    mainColor: string;
    navBar: string;
  };
}

export const GlobalStyle = createGlobalStyle<ThemeInterface>`
  ${reset}

	* { box-sizing: border-box; }
  ol, ul, li { list-style: none; }
  a { text-decoration: none; cursor: pointer; }

	// theme
  :root {
    --black: rgba(0, 0, 0, 1);
    --white: rgba(255, 255, 255, 1);
  }
`;
