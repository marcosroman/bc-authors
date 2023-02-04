import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../views/Main';
import NewAuthor from '../views/NewAuthor';
import EditAuthor from '../views/EditAuthor';

const AppRoutes = (props) => {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element=<Main /> />
					<Route path="/new" element=<NewAuthor /> />
					<Route path="/:id/edit" element=<EditAuthor /> />
				</Routes>
			</BrowserRouter>
	);
}

export default AppRoutes;
