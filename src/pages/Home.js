import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub ,faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons' 


export default function Home(props) {
	
	return(
		<div className="content">
			<div className="intro">
					<h2><span>HELLO, I'm </span></h2>
					<h2><span>Mitesh</span></h2>
					<p>
						I'm Web Developer 
					</p>
					<ul>
						<li>
							<a class="github" href="https://github.com/MitBit-Dev/"><FontAwesomeIcon icon={faGithub} /></a>
						</li>

						<li>
							<a className="linkedin" href="https://www.linkedin.com/in/mitesh-rajput-0162a81b1/"><FontAwesomeIcon icon={faLinkedin} /></a>
						</li>
						<li>
						<a className="stackoverflow" href="https://stackoverflow.com/users/13793729/mitbit-dev"><FontAwesomeIcon icon={faStackOverflow} /></a>
						</li>
					</ul>
			</div>
		</div>
	);
}