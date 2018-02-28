import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    return (<Button onClick={this.props.onOpenMetrics}>Add metric</Button>);
  }
}


Metric.propTypes={
  onOpenMetrics: PropTypes.func.isRequired
}
