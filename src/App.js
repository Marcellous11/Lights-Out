import React from 'react';
import Board from './Board';
import './App.css';

/** Simple app that just shows the LightsOut game. */

function App() {
	return (
		<div className="App">
			<h2>
				The puzzle is won when when all of the lights are turned <b>OFF</b>.
			</h2>
			<h4>
				*<i>White lights are ON</i>*{' '}
			</h4>

			<Board />
		</div>
	);
}

export default App;
