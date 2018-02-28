import createTheme from 'styled-components-theme';
import {injectGlobal}  from 'styled-components';
import colors from './colors';
import fonts from './fonts';
import media from './media';


const theme = createTheme(...Object.keys(colors))

injectGlobal`
body {
  font-family: ${fonts.font};
  text-transform: ${fonts.transformation};
  background-color: ${colors.dark};
  color: ${colors.light};
}`;

export default theme
