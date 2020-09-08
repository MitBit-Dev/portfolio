import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function ContactMe(props) {
	return(
		<div className="content">
			<div className="contactme">
				<h2><span>How can you reach</span></h2>
				<h2><span>Me?</span></h2>
				<h2>
					<span><FontAwesomeIcon icon={faEnvelope} /> EMAIL ME</span> :  <span>miteshrajput.dev@gmail.com</span>
				</h2>

				<h2>
					<span><FontAwesomeIcon icon={faPhone} /> Phone</span> :  <span>+91 9833431117</span>
				</h2>

			</div>
		</div>
	);
}