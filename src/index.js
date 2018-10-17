import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hero from './Hero';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { HeroesList } from './HeroesList';

ReactDOM.render(
				<div className="ma3">
				  <Hero name={HeroesList[0].name} gender={HeroesList[0].gender} height={HeroesList[0].height} mass={HeroesList[0].mass}/>
				  <Hero name={HeroesList[1].name} gender={HeroesList[1].gender} height={HeroesList[1].height} mass={HeroesList[1].mass}/>
				  <Hero name={HeroesList[2].name} gender={HeroesList[2].gender} height={HeroesList[2].height} mass={HeroesList[2].mass}/>
				</div>,
				document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
