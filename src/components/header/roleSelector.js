import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Select = styled.select`
                      font-size: 1em;
                      margin: 1em;
                      padding: 1em;
                      border-radius: 2px;
                      color: ${theme.light};
                      background-color:${theme.dark};
                      text-transform: uppercase;
                      text-align-last:center;
                      `;

export default class RoleSelector extends Component {

  render() {
    return (<Select id = "myDashboard">
              <option value = "1">My Dashboard</option>
              <option value = "1">Accountanting Dashboard</option>
              <option value = "2">HR Dashboard</option>
            </Select>);
  }
}
