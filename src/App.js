import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoriteStories from './components/FavoriteStories';

import Navbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import Stories from './components/Stories';
import StoriesContextProvider from './contexts/storiesContext';

function App() {
	return (
		<BrowserRouter>
			<StoriesContextProvider>
				<div className="App">
					<Navbar />
					<Routes>
						<Route path="/" element={<Stories />}></Route>
						<Route path="/favorites" element={<FavoriteStories />}></Route>
					</Routes>
					<SecondaryNavbar />
				</div>
			</StoriesContextProvider>
		</BrowserRouter>
	);
}

export default App;
