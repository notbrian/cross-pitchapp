import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const Container = styled.div`
  text-align: Center;
  display: grid;
  place-items: center;
  grid-auto-rows: auto;
  height: 100vh;
  /* background-color: red; */
`;

const Submit = styled.input `
    display: block;
    margin-left: auto;
    margin-right: auto;

    text-decoration: none;
    display: block;
    margin-top: 1vh;
    padding: 10px;
    border: 2px solid black;
    color: black;

`


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      authenticated: false
    };

    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleUser(event) {
    this.setState({ user: event.target.value });
  }

  handlePass(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({authenticated: true})
  }
  render() {

    if(this.state.authenticated) {
        return(<Redirect to="/main"></Redirect>)
    }

    return (
      <Container>
        <div>
          <h1>Login</h1>
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

export default Login;
