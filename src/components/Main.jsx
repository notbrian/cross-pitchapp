import React, { Component } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Container = styled.div`
    text-align: Center;
    display: grid;
    place-items: center;
    grid-auto-rows: auto;
    height: 100vh;
    /* background-color: red; */

`

const Action = styled(Link) `
    text-decoration: none;
    display: block;
    margin-top: 1vh;
    padding: 10px;
    border: 2px solid black;
    color: #2e8b57;
    transition: 0.5s ease-in;
    width: 100px;
    height: 100px;

    display:flex;/*CSS3*/
    align-items:center;/*Vertical align*/
    justify-content:center; /*horizontal align*/

    :hover {
        background-color: black;
        color:white;
    }

`
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

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Container>
          <TopBar>
            <Title> PITCH </Title>
          </TopBar>
          <div> 
            <Action to="/create">Create Pitch</Action>
            <Action to="/scan"> Scan Pitch</Action>
          </div>
      </Container>);
  }
}
 
export default Main;