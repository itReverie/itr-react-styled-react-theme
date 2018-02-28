import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as conceptActions from '../actions/conceptActions';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledHeader= styled.div`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between ;
                    align-items: center;
                    `;

const Button = styled.button`
                      font-size: 1em;
                      margin: 1em;
                      padding: 0.25em 1em;
                      border-radius: 3px;
                      color: ${props => props.theme.main};
                      border: 2px solid ${props => props.theme.main};
                      `;

                    // We're passing a default theme for Buttons that aren't wrapped in the ThemeProvider
                    Button.defaultProps = {
                      theme: {
                        main: 'palevioletred'
                      }
                    }




class App extends Component {



  render() {
    return (<StyledHeader>
                 <div>Welcome Charles</div>
                 <select id = "myDashboard">
                  <option value = "1">Accountant</option>
                  <option value = "2">HR</option>
                 </select>
                 <Button>Add metrics</Button>
           </StyledHeader>);
  }
}


App.propTypes={
  actions : PropTypes.object.isRequired
};


//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {
  return {concepts: state.concepts};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(conceptActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
