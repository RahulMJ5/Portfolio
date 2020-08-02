import React from "react";
import { Container } from "react-bootstrap";
import "./Homepage.css";
import {Button} from "react-bootstrap";
function Homepage() {
  return (
    // <div className="demoContainer">
    <Container size="lg" className="demoContainer shadows reverseOnMobile bgWhite">
      <div className="fst">
        <h4> HELLO EVERYONE, I AM </h4>
        <h1>RAHUL JHA</h1>
        <h4><b>SOFTWARE DEVELOPER</b></h4> 
        <Button href="https://drive.google.com/file/d/1TMkHQNifu-BjIvPtiO0KBHykgCT8415S/view?usp=sharing" target="_blank">Download CV</Button>
      </div>
      <div className="imageContainer">
        <img className="avatar shadows" src={require('../images/myAvatar.svg')} alt="Avatar" style={{ width: '300px', height: '300px' }} />
      </div>
    </Container>
    // </div>
  )
}

export default Homepage;