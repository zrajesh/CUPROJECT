import React from 'react';
import { Link } from 'react-router-dom';
import NavComponent from '../components/NavComponent';

import "./About.css";

const Events = () => {
    return (
        <div>
        <NavComponent />
        <div className="fh5co-hero fh5co-hero-2">
			<div className="fh5co-overlay"></div>
			<div className="hero fh5co-cover fh5co-cover_2 text-center" data-stellar-background-ratio="0.5">
				<div className="desc animate-box">
					<h2>EVENTS</h2>
					<span>Welcome to the events of ALUMINI CONNECT
					</span>
				</div>
			</div>
		</div>
        <div id="fh5co-about" className="displ-con">
			<div className="container widthCen">
				<div className="row">
					<div className="bod-head col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Collaborate and learn with your peers</h3>
						<p>
							We at ALUMINI CONNECT organize our events in the most CHEERFUL way.
							<br /> Please participate in our events and have fun.
						</p>
					</div>
				</div>
			</div>
		</div>
        <div className="event-glimps">
        <h2>Some Glipmse of our events</h2>
        <div className="events-pic">
            <div>
            <img className='event-pic' src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="event" />
            </div>
            <div>
            <img className='event-pic' src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80" alt="event" />
            </div>
            <div>
            <img className='event-pic' src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="event" />
            </div>
            <div>
            <img className='event-pic' src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="event" />
            </div>
        </div>
        </div>
        </div>
    );
};

export default Events;