import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hero from './Hero';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { Heroes } from './Heroes';

ReactDOM.render(
				<div className="ma3">
				  <Hero name={Heroes[0].name} gender={Heroes[0].gender}/>
				  <Hero name={Heroes[1].name} gender={Heroes[1].gender}/>
				  <Hero name={Heroes[2].name} gender={Heroes[2].gender}/>
				</div>,
				document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
