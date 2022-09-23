import React from 'react';
import NavComponent from '../components/NavComponent';

import "./About.css";

const About = () => {
    return (
        <div>
        <NavComponent />
        <div className="fh5co-hero fh5co-hero-2">
			<div className="fh5co-overlay"></div>
			<div className="hero fh5co-cover fh5co-cover_2 text-center" data-stellar-background-ratio="0.5">
				<div className="desc animate-box">
					<h2>About Us</h2>
					<span>Alumni Connect is crafted by 
						<a href="https://www.linkedin.com/in/sultan-mamud-47a640204/" className="teammembers">sultan</a>
						<a href="https://www.linkedin.com/in/jeevan-sharma-43629a216" className="teammembers">jeevan</a>
						<a href="https://www.facebook.com/profile.php?id=100004854947002" className="teammembers">saikat</a>
						<a href="https://www.linkedin.com/in/sultan-mamud-47a640204/" className="teammembers">firoj</a>
					</span>
				</div>
			</div>
		</div>
        <div id="fh5co-about" className="displ-con">
			<div className="container widthCen">
				<div className="row">
					<div className="bod-head col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>About Us</h3>
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

export default About;
