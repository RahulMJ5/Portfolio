import React from 'react';
import './App.css';
import Aboutme from './container/Aboutme';
import Homepage from './container/Homepage';
import Education from './container/Education';
import Experience from './container/Experience';
import Contact from './container/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar fixed="top" bg="custom" expand="lg">
          <Navbar.Brand href="#home">Rahul Jha</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
            <Nav.Link href="#Aboutme"><b>About me</b></Nav.Link>
              <Nav.Link href="#Education"><b>Education</b></Nav.Link>
               <Nav.Link href="#Experience"><b>Experience</b></Nav.Link>
              <Nav.Link href="#Contact"><b>Contact</b></Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <Homepage />

      </div>

      <div id="Aboutme">
        <Aboutme />
      </div>
      {/* <section>
  
</section> */}
      <div id="Education">
        <Education />
      </div>

      <div id="Experience">
        <Experience />
      </div>

      <div id="Contact">
<Contact />
</div>

    </div>



  );
}


export default App;
