import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as conceptActions from '../actions/conceptActions';
import PropTypes from 'prop-types';

import Header from './header/';


class App extends Component {

  render() {
    return (<Header />);
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
