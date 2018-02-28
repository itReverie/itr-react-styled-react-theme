import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as conceptActions from '../actions/conceptActions';
import PropTypes from 'prop-types';

import Header from './header/';
import Metrics from './metrics/';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isMetricsOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isMetricsOpen: !this.state.isMetricsOpen
    });
  }

  render() {
    return (<div>
                <Header onOpenMetrics={this.toggleModal}/>
                <Metrics   show={this.state.isMetricsOpen}
                        onClose={this.toggleModal}/>

            </div>);
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
