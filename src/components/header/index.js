import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../styles/theme';
import media from '../../styles/media';

import Profile from './profile';
import RoleSelector from './roleSelector';
import Metric from './metric';

 console.log(theme);
const StyledHeader= styled.div`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between ;
                    align-items: center;
                    background-color: ${theme.dark};
                    color:${theme.light};
                    ${media.tablet`flex-direction: column;`}
                    ${media.phone`flex-direction: column;`}
                    `;

export default class Header extends Component {

  render() {
    return (<StyledHeader>
                <Profile />
                 <RoleSelector/>
                 <Metric />
           </StyledHeader>);
  }
}
