import React, { Component } from 'react';
import styled from "styled-components"

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
    this.state = {};
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
  render() {
    

    return (
      <Container>
          <div>
            <Header >Scan</Header>
        <video autoPlay={true} id="videoElement">
 
        </video>
          </div>
        
      </Container>
    );
  }
}

export default Scan;
