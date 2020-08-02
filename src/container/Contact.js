import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";

function Contact (){
    return (
		<div>
            <div className="heading">
            <h1>Contact</h1>
            =====================
			</div>
			<Container className="CompContainer">
            <div class="d-flex">
            <i class="fa fa-map-marker" aria-hidden="true">
                           <h6> Hyderabad , India </h6></i>
                        </div>
                        <div class="info_item">
                            <i class="fa fa-phone"></i>
                            <h6>+91-7709971391</h6>
                            <p>Mon to Fri 9am to 6 pm</p>
                        </div>
                        <div class="info_item">
                            <i class="fa fa-envelope"></i>
                            <h6><a href="https://mail.google.com/mail/u/0/#inbox?compose=new">rahuljha058@gmail.com</a></h6>
                            <p>Send me your query anytime!</p>

             </div>
             <div className="Social">

                            <h4>Follow Me</h4>
                
                        <div class="footer_social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-github"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                        </div>
                        </div>
    
		</Container>
	</div>
    )
}
export default Contact;