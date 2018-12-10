import React, { Component } from 'react';
import Projects from './components/Projects';
import { Container } from '../src/style/style';
import Home from './components/Home';
import { Route } from  'react-router-dom';
import Actions from './components/Actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
      <Route exact path='/' component={Home}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path="/actions/project/:id" component={Actions}/>
      </Container>
    );
  }
}

export default App;
