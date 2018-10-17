import React from 'react';

const Hero = (props) => {
	return (
		<div className='yellow bg-dark-gray pa2 ma2 pointer ba b--dotted bw2 shadow-3 flex mr2 mw7 grow'>
			<img alt='hero' src='http://www.actucine.com/wp-content/uploads/2013/08/Star-Wars.gif' />
			<div className = "pa3">
				<h2>{props.name}</h2>
				<p>Gender: {props.gender}</p>
			</div>
		</div>
		);
}

export default Hero;