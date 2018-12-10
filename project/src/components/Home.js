import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HomeContainer, Logo } from '../style/style';

class Home extends Component {
  render() { 
    return ( 
      <HomeContainer>
      <Logo>welcome to Project </Logo>
      <Link to ='/projects'>
      <Button color="primary">View Projects</Button>
      </Link>
      </HomeContainer>
    );
  }
}
 
export default Home;