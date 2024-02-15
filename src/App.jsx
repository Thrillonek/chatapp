import { useState } from 'react';
import './App.scss';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<p className='text'>Hello there</p>
		</>
	);
}

export default App;
