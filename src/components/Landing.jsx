import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const Container = styled.div`
  text-align: Center;
  display: grid;
  place-items: center;
  grid-auto-rows: auto;
  height: 100vh;
  /* background-color: red; */
`;



const Subtitle = styled.p`
  align-self: center;
  justify-self: center;
`;
const PitchBtn = styled(Link)`
  text-decoration: none;
  display: block;
  margin-top: 1vh;
  padding: 10px;
  border: 2px solid black;
  color: #2e8b57;
  transition: 0.5s ease-in;

  :hover {
    background-color: black;
    color: white;
  }
`;

const Submit = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;

  text-decoration: none;
  display: block;
  margin-top: 1vh;
  padding: 10px;
  border: 2px solid black;
  color: black;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  top: 0;
  left: 0;
  height: 20vh;
  background-color: #a6d496;

`;

const Title = styled.h1`
  align-self: flex-end;
  justify-self: center;
  letter-spacing: 5px;
  bottom: 0;
`;
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      authenticated: false
    };
  }

  handleUser = event => {
    this.setState({ user: event.target.value });
  };

  handlePass = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ authenticated: true });
  };

  render() {
    if (this.state.authenticated) {
      return <Redirect to="/main" />;
    }

    return (
      <Container>
        <div>
          <TopBar>
            <Title> PITCH </Title>
          </TopBar>
          <form onSubmit={this.handleSubmit}>
            <p>Username</p>
            <input
              type="text"
              value={this.state.user}
              onChange={this.handleUser}
            />
            <p>Password</p>
            <input
              type="text"
              value={this.state.password}
              onChange={this.handlePass}
            />
            <Submit type="submit" value="Submit" />
          </form>
        </div>
      </Container>
    );
  }
}

export default Landing;
