import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
 constructor(props){
  super(props);
  this.state={
    project:{},
    actions:[]
  }
 }

  componentDidMount(){
    axios.get(`http://localhost:5050/api/projects/${this.props.match.params.id}`)
    .then(res =>{
      console.log(res)
      this.setState({
        project: res.data,
        actions: res.data.actions
      })
    })
    .catch(err =>{
      console.log(err)
    })
  }

  render() { 
    console.log(this.state.actions)
    const { id, name, description, complete } = this.state.project
    return ( 
      <><h3>{name}</h3>
      <p>{description}</p>
      <h5>{complete}</h5>
      <h3>Actions</h3>
      <ul>
        {this.state.actions.map(action =>{
        return [<li><h5>Notes: {action.notes}</h5></li>,
          <li><p>Description: {action.description},</p></li>
        ]
        })}
      </ul>
      </>
    );
  }
}
 
export default Details;