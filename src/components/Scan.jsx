import React, { Component } from 'react';
import styled from "styled-components"
import QrReader from 'react-qr-scanner'


const Container = styled.div`
    text-align: Center;
    display:flex;/*CSS3*/
    align-items:center;
    justify-content:center;
    height: 100vh;
`

const Header = styled.h1`
`

class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: 'No result',
    };


  }

  componentDidMount() {
    var video = document.querySelector("#videoElement");
 
    if (navigator.mediaDevices.getUserMedia) {       
        navigator.mediaDevices.getUserMedia({video: true})
      .then(function(stream) {
        video.srcObject = stream;
      })
      .catch(function(error) {
        console.log("Something went wrong!");
      });
    }
  }

  handleScan = (data) => {
    this.setState({
      result: data,
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

    return (
      <Container>
          <div>
            <Header >Scan</Header>
            <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
          </div>
        
      </Container>
    );
  }
}

export default Scan;
