import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../styles/theme';

import Profile from './profile';
import RoleSelector from './roleSelector';
import Metric from './metric';

const StyledHeader= styled.div`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between ;
                    align-items: center;
                    background-color: ${theme.dark};
                    color:${theme.light};
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
