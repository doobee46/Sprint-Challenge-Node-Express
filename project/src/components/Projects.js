import React, { Component } from 'react';
import Project from '../components/Project';
import { Button } from 'reactstrap';
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
      <Button color="success"> + Add Project</Button>
      {this.state.projects.map(project =>{
        return <Project key={project.id} project={project}/>
      })}
      </>
    );
  }
}
 
export default Projects;