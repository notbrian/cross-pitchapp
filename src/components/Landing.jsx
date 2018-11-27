import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Container = styled.div`
    text-align: Center;
    display: grid;
    place-items: center;
    grid-auto-rows: auto;
    height: 100vh;
    /* background-color: red; */

`

const Title = styled.h1`
    align-self: center;
  justify-self: center;
`

const Subtitle = styled.p`
    align-self: center;
  justify-self: center;
`
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
        color:white;
    }
`

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        
        <Container>
            <div>
            <Title> Pitch </Title>
            <Subtitle>Welcome to Pitch, you pitching tonight?</Subtitle>
            <PitchBtn to="/login">Start Pitching</PitchBtn>
            </div>

        </Container>
        
        );
    }
}
 
export default Landing;