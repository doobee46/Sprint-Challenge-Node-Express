import React, { Component } from 'react';

class Action extends Component {
  render() { 
    const { description, notes } = this.props.action
    return ( 
      <>
      <h3>{notes}</h3>
      <p>{description}</p>
      </>
    );
  }
}
 
export default Action ;