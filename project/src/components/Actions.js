import React, { Component } from 'react';
import axios from 'axios';
import { Container } from '../style/style';
import Action from '../components/Action';


class Actions  extends Component {
  constructor(props){
    super(props);
    this.state={
      actions:[]
    }
  }

  componentDidMount(){
    axios
    .get(`http://localhost:5050/api/actions/project/${this.props.match.params.id}`)
    .then(res =>{
      console.log(res)
      this.setState({
        actions: res.data
      })
    })
    .catch(err =>{
      console.log(err)
    })
  }

  render() {
    console.log(this.state.actions)
    return ( 
      <Container>
        { this.state.actions.map(action =>{
          return <Action key={action.id} action={action}/>
        })}
      </Container>
    );
  }
}
 
export default Actions ;