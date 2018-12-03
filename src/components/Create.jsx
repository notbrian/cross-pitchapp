import React, { Component } from 'react';
import styled from "styled-components"
import { BrowserRouter as Router, Link } from 'react-router-dom';
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



class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirm: false,
            nameT: "",
            total: 0,
            numPeople: 0,
            owner: "Brian Nguyen"
        }
    }

    
    handleChange = (event) => {
           
        this.setState({ [event.target.name]: event.target.value });

}
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({confirm: true})
    }


    render() { 
        let confirm = "";

        //   <QRCode value={`${pitchData}`} />
        if(this.state.confirm) {
            let pitchData = {
                nameT: this.state.nameT,
                total: this.state.total,
                numPeople: this.state.numPeople,
                owner: this.state.owner,
                perPerson: Math.round(parseInt(this.state.total)/parseInt(this.state.numPeople))
            }
            confirm = (
                <div>
                  <p> CAD${pitchData.total}/{pitchData.numPeople} people</p>
                  <p> = CAD${Math.round(pitchData.perPerson)} per person</p>
                    
                  <Confirm to={{
                      pathname: '/pitchScan',
                      state: {
                        nameT: this.state.nameT,
                        total: this.state.total,
                        numPeople: this.state.numPeople,
                        owner: this.state.owner,
                        perPerson: pitchData.perPerson
                      }
                  }}>Confirm</Confirm>
                </div>
            
          
            )
        }


        return (
        <Container>
            <div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="nameT">What for?</label>
                <input type="text" name="nameT" id="nameT" placeholder="dinner" onChange={this.handleChange}/>
                <label htmlFor="total">Total $CAD</label>
                <input type="text" name="total" id="total" onChange={this.handleChange} placeholder="50?"/>
                <label htmlFor="numPeople"># of People </label>
                <input type="range" name="numPeople" id="numPeople" onChange={this.handleChange}  min="0" max="11"/>
                <Submit type="submit" value="Generate"/>
              </form>
              {confirm}
            </div>
        </Container>
        );
    }
}
 
export default Create;