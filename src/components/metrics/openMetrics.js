import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';
import closeIcon from '../../icons/close.svg';

// The modal "window"
const StyledOpenMetric = styled.div `
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: ${theme.template};
  border-radius: 5;
  margin: 25px auto;
  padding: 30;
  min-width: 200px;
  max-width: 150px;
  min-height: 200px;
`;

class OpenMetrics extends React.Component {
  render() {

    return (<StyledOpenMetric>
              {this.props.text}
              </StyledOpenMetric>);
  }
}

OpenMetrics.propTypes = {
  text: PropTypes.string.isRequired
};

export default OpenMetrics;
