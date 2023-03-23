import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Stories from './components/Stories';
import StoriesContextProvider from './contexts/storiesContext';

function App() {
	return (
		<BrowserRouter>
			<StoriesContextProvider>
				<div className="App">
					<Navbar />
					<Stories />
				</div>
			</StoriesContextProvider>
		</BrowserRouter>
	);
}

export default App;
