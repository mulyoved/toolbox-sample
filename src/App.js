import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './toolbox/theme.css';
import theme from './toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import {Button, IconButton} from 'react-toolbox/lib/button/Button';


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </div>
      </ThemeProvider>
    );
  }
}

export default App;
