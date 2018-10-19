import React from 'react';
import Card from './Card';
import Heroes from './Heroes'

const HeroesList = () => {

	Heroes.get().then(list => {	
		console.log(list);

		let cardComponent={};

		list.map((user, i) => {
			cardComponent = <Card name={list[i].name} gender={list[i].gender} height={list[i].height} mass={list[i].mass} b_y={list[i].birth_year}/>
		})

		console.log(cardComponent);
		
		return (	
				<div className="ma3">
				  { cardComponent }
				</div>
			);
	})
	
}
	
export default HeroesList