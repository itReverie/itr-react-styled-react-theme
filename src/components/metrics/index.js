import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';
import closeIcon from '../../icons/close.svg';
import OpenMetrics from './openMetrics';
import media from '../../styles/media';

//  position: 'fixed',
//padding: '0px 25px 0px 25px'
//backgroundColor: 'rgba(0,0,0,0.6)',

// The gray background
const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.dark.fade(0.3)};
  padding: 7em 40px 7em 40px;
`;

// The modal "window"
const StyledModal = styled.div `
  background-color: ${theme.modal};
  border-radius: 5;
  min-height: 600px;
  margin: 0 auto;
  padding: 30;
  overflow:scroll;
`;

const TitleContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    border-bottom: solid 2px;
    border-bottom-color: ${theme.light.fade(0.3)};
    padding: 20px 40px 20px 40px;
`;
//margin: auto auto;
const MetricsContainer=styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content:space-evenly;
    ${media.tablet`flex-direction: column; `}
    ${media.phone`flex-direction: column;`}
`;


const CloseButton=styled.img`
    align-self: flex-end;
    max-height: 25px;
    max-width: 25px;
`;

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }



    return (  <StyledBackdrop>
        <StyledModal>

          <TitleContainer>
          <div>Chose a metric to add</div>
          <CloseButton onClick={this.props.onClose} src={closeIcon} />
          </TitleContainer>

          <MetricsContainer>
          <OpenMetrics text={'What percentage of...?'} />
          <OpenMetrics text={'How Many...?'} />
          <OpenMetrics text={'Which...?'} />
          <OpenMetrics text={'During...?'} />
          </MetricsContainer>

        </StyledModal>
      </StyledBackdrop>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
