import createTheme from 'styled-components-theme';
import {injectGlobal}  from 'styled-components';
import colors from './colors';
import fonts from './fonts';
import media from './media';


const theme = createTheme(...Object.keys(colors))

injectGlobal`
body {
  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;
  background-color: ${colors.dark};
}`;

export default theme
