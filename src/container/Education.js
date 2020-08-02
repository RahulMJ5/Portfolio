import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Education.css";

function Education() {
    return (
        <div>
           
            
            <Container className="ConEducation marginBottom">

            <div className="heading">
            <h1> Education </h1>
            =====================
            </div>
              
                <Row>
                    <Col xs={5} className="leftCol" >
                        <div className="leftSide">
                           <h4><b>MCA</b></h4>
                           2017-2020
                        </div>
                       
                    </Col>
                    <Col xs={2} className="verticalLine" >
                    <div className="triangle" />
                    </Col>
                    <Col xs={5} className="rightSide">
                        {/* <div className="triangle"/> */}
                        <p>Aurora's Pg College</p>
                        <p>Hyderabad</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} className="leftCol" >
                        <div className="leftSide">
                           <h4><b>BCA</b></h4>
                           2014-2017
                        </div>
                       
                    </Col>
                    <Col xs={2} className="verticalLine" >
                        <div className="triangle" />
                    </Col>
                    <Col xs={5} className="rightSide">
                        {/* <div className="triangle"/> */}
                        <p>G.H Raisoni Institude of I.T</p>
                        <p>Nagpur</p>
                        {/* right */}
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} className="leftCol" >
                        <div className="leftSide">
                           <h4><b>HSC</b></h4>
                           2014
                        </div>
                       
                    </Col>
                    <Col xs={2} className="verticalLine" >
                    <div className="triangle" />
                    </Col>
                    <Col xs={5} className="rightSide">
                        {/* <div className="triangle"/> */}
                        <p>Jamdar Jr. College</p>
                        <p>Nagpur</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} className="leftCol" >
                    <div className="leftSide">
                           <h4><b>SSC</b></h4>
                           2012
                        </div>
                       
                    </Col>
                    <Col xs={2} className="verticalLine" >
                    <div className="triangle" />
                    </Col>
                    <Col xs={5} className="rightSide">
                        {/* <div className="triangle"/> */}
                            <p>A.V.M High School</p>
                            <p>Nagpur</p>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default Education;