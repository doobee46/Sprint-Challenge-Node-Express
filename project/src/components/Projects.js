import React, { Component } from 'react';
import axios from 'axios';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      projects:[]
    }
    this.url ='http:localhost:4000/api';
  }

  componentDidMount(){
    axios.get(`${this.url}/`)
    .then()
    .catch()
  }

  render() { 
    return ( 
      <>
      </>
    );
  }
}
 
export default Projects;