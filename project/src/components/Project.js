import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link, Route } from 'react-router-dom'

class Project extends Component {
  render() {
    const { id, name, description, complete } = this.props.project
    return ( 
      <>
      <h3>{name}</h3>
      <p>{description}</p>
      <h5>{complete}</h5>
      <Link to={`/actions/project/${id}`}>
      <Button color="primary">View Actions</Button>
      </Link>
      </>
    );
  }
}
 
export default Project;