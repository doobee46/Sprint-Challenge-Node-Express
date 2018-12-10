import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { ProjectContainer } from '../style/style';
import { Link } from 'react-router-dom'

class Project extends Component {
  render() {
    const { id, name, description, complete } = this.props.project
    return ( 
      <ProjectContainer>
      <Link to ={`/project/${id}`}>
      <h3>{name}</h3>
      </Link>
      <p>{description}</p>
      <h5>{complete}</h5>
      <Link to={`/project/${id}/actions`}>
      <Button color="primary">View Actions</Button>
      </Link>
      </ProjectContainer>
    );
  }
}
 
export default Project;