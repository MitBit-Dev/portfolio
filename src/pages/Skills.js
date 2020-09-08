import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faSass, faBootstrap } from '@fortawesome/free-brands-svg-icons' 
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons'

export default function ContactMe(props) {
	return(
		<div className="content">
			<div className="skills">
				<h2><span>What skills </span></h2>
				<h2><span>I have?</span></h2>
				<h2 className="lang">
					<span className="JS"><FontAwesomeIcon icon={faJsSquare} /></span> JavaScript :  
					<span className="star">
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={farStar} /> 
					</span>
				</h2>

				<h2 className="lang">
					<span className="html"><FontAwesomeIcon icon={faHtml5} /></span> HTML5 :  
					<span className="star">
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={farStar} /> 
					</span>
				</h2>

				<h2 className="lang">
					<span className="css3"><FontAwesomeIcon icon={faCss3} /></span> CSS3 :  
					<span className="star">
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={farStar} /> 
					</span>
				</h2>

				<h2 className="lang">
					<span className="BS4"><FontAwesomeIcon icon={faBootstrap} /></span> Bootstrap 4:  
					<span className="star">
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={farStar} /> 
					</span>
				</h2>

				<h2 className="lang">
					<span className="sass"><FontAwesomeIcon icon={faSass} /></span> SASS:  
					<span className="star">
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={faStar} /> 
						<FontAwesomeIcon icon={farStar} /> 
						<FontAwesomeIcon icon={farStar} /> 
					</span>
				</h2>

			</div>
		</div>
	);
}