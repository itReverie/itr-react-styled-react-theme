import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Button = styled.button`
                      font-size: 1em;
                      margin: 1em;
                      padding: 1em;
                      border-radius: 2px;
                      color: ${theme.light};
                      background-color:${theme.main};
                      text-transform: uppercase;
                      `;

export default class Metric extends Component {

  render() {
    return (<Button>Add metric</Button>);
  }
}
