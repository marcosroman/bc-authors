import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AuthorForm from '../forms/AuthorForm';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditAuthor = (props) => {
	const [author, setAuthor] = useState({})
	const {id} = useParams();
	const API_BASE_URI = "http://localhost:8000/api/authors";

	useEffect(() => {
		axios.get(API_BASE_URI+'/'+id)
			.then(res => {
				setAuthor(res.data.author);
			})
			.catch(err=>console.log(err));
	},[id]);

	return (
		<div>
			<Link to="/">Home</Link>
			<p>Edit this author:</p>
			<div>
				<AuthorForm {...author} />
			</div>
		</div>
	);
}

export default EditAuthor;

