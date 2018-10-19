import React from 'react';

const Card = (props) => {
	const { name, gender, height, mass, b_y } = props;
	return (
		<div className='yellow bg-dark-gray pa2 ma2 pointer ba b--dotted bw2 shadow-3 flex mr2 mw7 grow'>
			<img alt='hero' src='http://www.actucine.com/wp-content/uploads/2013/08/Star-Wars.gif' />
			<div className = "ma3">
				<h2>{name}</h2>
				<p>Gender: {gender} <br/>
				Height: {height} <br/> 
				Mass: {mass} <br/>
				Birth year: {b_y} </p>
			</div>
		</div>
		);
}

export default Card;