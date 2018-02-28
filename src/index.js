import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import './index.css';
import '../node_modules/highlight.js/styles/atom-one-dark.css';
import Routes from './routes';
import {loadConcepts} from './actions/conceptActions';
import {ThemeProvider} from 'styled-components';

const store=configureStore();

// Define what props.theme will look like
const theme = {
  main: 'mediumseagreen'
};

//Dispatch Actions
store.dispatch(loadConcepts());

ReactDOM.render(
  (<Provider store={store}>
    <ThemeProvider theme={theme}>
    <Routes />
    </ThemeProvider>
  </Provider>),
  document.getElementById('root'));
