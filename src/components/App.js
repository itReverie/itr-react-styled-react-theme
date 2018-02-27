import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as conceptActions from '../actions/conceptActions';
import PropTypes from 'prop-types';


class App extends Component {

  constructor(props) {

      super(props);
      if(this.props.concepts.length >0)
      {
       this.state ={
         concepts: Object.assign({},this.props.concepts),
         errors: {}
       };
      }
    }

  render() {
    return <div>Hello</div>;
  }
}


App.propTypes={
  concepts: PropTypes.array.isRequired,
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
