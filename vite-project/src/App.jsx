import { useState } from 'react';
import moana from './assets/moana.png';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<img src={moana} className="moana" alt="Moana logo" />
				<p>Hello Scrimba React Students!</p>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Learn more</p>
		</div>
	);
}

export default App;
