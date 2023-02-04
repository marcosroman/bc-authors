import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = (props) => {
	const [authors, setAuthors] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const navigate = useNavigate();
	const API_BASE_URI = "http://localhost:8000/api/authors";

	// fetch author list and set loaded=true
	useEffect(() => {
		axios.get(API_BASE_URI)
			.then(res => {
				setAuthors(res.data.author);
				setLoaded(true);
			})
			.catch(err => alert(err));
	}, [authors, loaded]);

	const editAuthor = (e,id) => navigate(`/${id}/edit`);
	
	const deleteAuthor = (e,id) => {
		axios.delete(`${API_BASE_URI}/delete/${id}`)
			.then(res => removeFromDOM(id));
	}

	const removeFromDOM = (id) => {
		setAuthors(authors.filter(a => a._id !== id));
	}

	return (
		<main>
			<Link to="/new">Add an author</Link>
			{ !loaded ? (<p>Loading...</p>) : (
				(authors.length===0) ? (<p>No data found</p>) : (
					<div>
						<p>We have quotes by:</p>
						<table>
							<thead>
								<tr>
									<th>Author</th>
									<th>Actions available</th>
								</tr>
							</thead>
							<tbody>
								{authors.map((author) => (
										<tr key={author._id}>
											<td>{author.name}</td>
											<td>
												<button onClick={(e) => editAuthor(e, author._id)}>Edit</button>
												<button onClick={(e) => deleteAuthor(e, author._id)}>Delete</button>
											</td>
										</tr>
									))};
							</tbody>
						</table>
					</div>
			))}
		</main>
	);
}

export default Main;


