import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
	return (
		<div>
			<div className="Hello">
				<img width="200px" alt="icon" src={icon} />
			</div>
			<h1>electron-react-boilerplate</h1>
		</div>
	);
};

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Hello />} />
			</Routes>
		</Router>
	);
}
