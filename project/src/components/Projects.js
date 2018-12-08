import React, { Component } from 'react';
import Project from '../components/Project';
import axios from 'axios';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      projects:[]
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5050/api/projects')
    .then(res =>{
      this.setState({
        projects: res.data
      })
    })
    .catch(err =>{
      console.log(err)
    })
  }

  render() { 
    console.log(this.state.projects)
    return ( 
      <>
      {this.state.projects.map(project =>{
        return <Project key={project.id} project={project}/>
      })}
      </>
    );
  }
}
 
export default Projects;