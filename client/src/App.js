import './App.css';
import Main from './views/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
			<h1>Favourite authors</h1>
			<BrowserRouter>
				<Routes>
					<Route path="/" element=<Main /> />
					<Route path="/new" element=<NewAuthor /> />
					<Route path="/:id/edit" element=<EditAuthor /> />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
