import { BrowserRouter, Route, Routes } from 'react-router-dom';

import StoriesContextProvider from './contexts/storiesContext';

import Navbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import Stories from './components/Stories';
import FavoriteStories from './components/FavoriteStories';
import Events from './components/Events';

function App() {
	return (
		<BrowserRouter>
			<StoriesContextProvider>
				<div className="App">
					<Navbar />
					<Routes>
						<Route path="/" element={<Stories />}></Route>
						<Route path="/events" element={<Events />}></Route>
						<Route path="/favorites" element={<FavoriteStories />}></Route>
					</Routes>
					<SecondaryNavbar />
				</div>
			</StoriesContextProvider>
		</BrowserRouter>
	);
}

export default App;
