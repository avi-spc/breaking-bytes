import { BrowserRouter, Route, Routes } from 'react-router-dom';

import StoriesContextProvider from './contexts/storiesContext';

import Navbar from './components/navbar/Navbar';
import SecondaryNavbar from './components/navbar/SecondaryNavbar';
import Stories from './components/story/Stories';
import FavoriteStories from './components/story/FavoriteStories';
import Events from './components/event/Events';

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
