import React, { Component } from 'react';
import Projects from './components/Projects';
import { Route } from  'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <Route path='/' component={Projects}/>
      </>
    );
  }
}

export default App;
