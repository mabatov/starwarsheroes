import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Hero from './Hero';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<Hero />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
