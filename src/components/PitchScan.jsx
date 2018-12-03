import React, { Component } from 'react';
import styled from "styled-components"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import potLogo from '../icons/pot.svg'
var QRCode = require('qrcode.react');



const Container = styled.div`
    text-align: Center;
    display:flex;/*CSS3*/
    align-items:center;
    justify-content:center;
    height: 100vh;

    div form input{
        display: block;
    }
`

const Submit = styled.input `
   text-decoration: none;
   margin-left: auto;
   margin-right: auto;
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

const Heading = styled.h1`

`
const Confirm = styled(Link)`
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



class pitchScan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameT: this.props.location.state.nameT,
            total: this.props.location.state.total,
            numPeople: this.props.location.state.numPeople,
            owner: this.props.location.state.owner,
            perPerson: this.props.location.state.perPerson
            
        }


    }



    render() { 
      

      

        return (
        <Container>
            <div>
              <QRCode value={`${JSON.stringify(this.state)}`} />
              <p >{this.state.nameT}</p>
              <p >{this.state.perPerson} per person</p>
              <img src={potLogo} alt="pot"/>
              <Heading> 1/{this.state.numPeople} Pitched </Heading>
            </div>
        </Container>
        );
    }
}
 
export default pitchScan;