import React from "react";
import { Container } from "react-bootstrap";
import "./Experience.css";

function Experience (){
    return (
		<div>
            <div className="heading">
            <h1>Experience</h1>
            =====================
			</div>
			<Container className="CompContainer">
                <div className="Company">
                <img  src={require('../images/sr_mukul.png')} alt="Logo" style={{ width: '70px', height: '70px' }} />
                <h3><b>ScrollRight</b></h3>
                <p> Full Time</p>
                <p>Since May,2020</p>
                <p>Software Developer</p>

             </div>
             <div className="Acompany">
                 <h3>About ScrollRight</h3>
                 <p>
                     ScrollRight  is a online freelance service provider and product building company
                      where you can ask to create your own application,website and software. 
                      Also, we provided freelance support to any firm, who needs it. Think Big.
                      Thing Innovative. Think ScrollRight!
                 </p>
             </div>
    
		</Container>
        <Container className="CompContainer">
                <div className="CCompany">
                <img  src={require('../images/kwiky.png')} alt="Logo" style={{ width: '50px', height: '50px' }} />
                <h3><b>Kwiky Technology</b></h3>
                <p>Internship</p>
                <p>Feb - May 2020</p>
                <p>Software Developer</p>

             </div>
             <div className="Bcompany">
                 <h3>About Kwiky Technology</h3>
                 <p>
                 We provide best IT training in Hyderabad for Digital Marketing, JAVA, Angular JS, Web Designing, Python.
                  Get assured placement with us
                 </p>
             </div>
    
		</Container>
	</div>
    )
}
export default Experience;