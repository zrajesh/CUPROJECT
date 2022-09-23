import React from 'react';
import { Link } from 'react-router-dom';
import NavComponent from '../components/NavComponent';

import "./About.css";

const ContactUs = () => {
    return (
        <div>
        <NavComponent />
        <div className="fh5co-hero fh5co-hero-2">
			<div className="fh5co-overlay"></div>
			<div className="hero fh5co-cover fh5co-cover_2 text-center" data-stellar-background-ratio="0.5">
				<div className="desc animate-box">
					<h2>CONTACT US</h2>
					<span>Conatct details:
						<Link href="#" className="teammembers">aluminiconnect@gmail.com</Link>
						<Link href="#" className="teammembers">www.aluminiconnectcu.com</Link>
						<Link href="#" className="teammembers">+91 9775842881</Link>
					</span>
				</div>
			</div>
		</div>
        <div id="fh5co-about" className="displ-con">
			<div className="container widthCen">
				<div className="row">
					<div className="bod-head col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Meet The Developer Team Member</h3>
						<p>
							We are glad to announce that we have successfully completed our 2nd sem project. Our teammembers are <b>Sultan, Jeevan, Firoj & Saikat</b>
							<br /> We want to thank our coordinator <b>Prof. Soumya Sen</b>. Also we want to thank our family members and friend.
						</p>
					</div>
				</div>
			</div>
			<div className="container widthCen">
				<div className="row row-bottom-padded-md">
					<div className="col-md-12 animate-box">
						<figure>
							<img src="https://i.ibb.co/h7FkYQy/collage.jpg" alt="Free HTML5 Bootstrap Template by code-projects.org" className="img-responsive" />
						</figure>
					</div>
				</div>
			</div>
		</div>
        </div>
    );
};

export default ContactUs;