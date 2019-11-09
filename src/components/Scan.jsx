import React, { Component } from 'react';
import styled from "styled-components"
import QrReader from 'react-qr-scanner'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Container = styled.div`
    text-align: Center;
    display:flex;/*CSS3*/
    align-items:center;
    justify-content:center;
    height: 100vh;
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

class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: 'No result',
      display: false,
      facingMode: 'user',
    };


  }

  componentDidMount() {
   
  }

  handleScan = (data) => {
    if(data === null) {return}
    let parsed = JSON.parse(data);

    for(let property in parsed) {
      this.setState({
        [property]: parsed[property]
      })
    }

    // if(this.state.result !== "No result") {
    //   console.log("scanned")
    // }


    this.setState({
      display: true
    })


  }

  handleError(err){
    console.error(err)
  }

  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    }

    if(this.state.display) {
      return(
        <Container>
          <div>
            <Heading >Scan</Heading>
        <p>Pitching CAD${this.state.perPerson} to {this.state.owner}</p>
        <p>for {this.state.nameT} (${this.state.total})</p>
        <Confirm to="/pay"> Confirm Payment</Confirm>
          </div>
        
      </Container>

      )
    }



    return (
      <Container>
          <div>
            <Heading >Scan</Heading>
            <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={this.state.facingMode}
          
          />
          </div>
        
      </Container>
    );
  }
}

export default Scan;
