import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AuthorForm = (props) => {
	const [name, setName] = useState("");
	const [isEdit, setIsEdit] = useState(false);
	const [errors, setErrors] = useState([]); // to display validation errors
	const navigate = useNavigate();
	const API_BASE_URI = 'http://localhost:8000/api/authors'

	useEffect(() => {
		if (props.name) {
			setIsEdit(true);
			setName(props.name);
		} else {
			setIsEdit(false);
		}
	}, [props.name]);

	const cancelForm = (e) => {
		e.preventDefault();
		navigate('/');
	}

	const submitForm = (e) => {
		e.preventDefault();

		const promise = isEdit ? axios.put(`${API_BASE_URI}/edit/${props._id}`,{name})
		                       : axios.post(`${API_BASE_URI}/new`,{name});

		promise
				.then(res => navigate('/'))
				.catch(err => {
					const errorsdata = err.response.data.errors;
					setErrors(Object.keys(errorsdata).map(k => errorsdata[k].message));
        });           
	}

	return (
		<form>
			{errors.map((item,index) => <p key={index}>{item}</p>)}
			<label htmlFor="name">Name</label>
			<input name="name" value={name} onChange={(e) => setName(e.target.value)} />
			<div className="btn">
				<button onClick={cancelForm}>Cancel</button>
				<button onClick={submitForm}>Submit</button>
			</div>
		</form>
	);
}

export default AuthorForm;

