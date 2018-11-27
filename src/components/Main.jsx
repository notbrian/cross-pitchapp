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

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Container>
          <div> 
            <Action to="/create">Create Pitch</Action>
            <Action to="/scan"> Scan Pitch</Action>
          </div>
      </Container>);
  }
}
 
export default Main;