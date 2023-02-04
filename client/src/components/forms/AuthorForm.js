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
		// no se si esta bien usar useEffect,
		// entiendo que es para fetch cosas fuera de react mas bien,
		// pero funciona y no se de que otra forma hacer esto ahora
	}, [props.name]);

	const cancelForm = (e) => {
		e.preventDefault();
		navigate('/');
	}

	const submitForm = (e) => {
		e.preventDefault();

		if(isEdit) { 
			axios.put(`${API_BASE_URI}/edit/${props._id}`,{name})
				.then(res => navigate('/'))
				//.catch(err => alert(err));
				.catch(err => {
					const errorResponse = err.response.data.errors; // Get the errors from err.response.data
					const errorArr = []; // Define a temp error array to push the messages in
					for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
							errorArr.push(errorResponse[key].message)
					}
					// Set Errors
					setErrors(errorArr);
				});
		} else {
			axios.post(`${API_BASE_URI}/new`,{name})
				.then(res => navigate('/'))
				.catch(err => {
					const errorResponse = err.response.data.errors; // Get the errors from err.response.data
					const errorArr = []; // Define a temp error array to push the messages in
					for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
							errorArr.push(errorResponse[key].message)
					}
					// Set Errors
					setErrors(errorArr);
        });           
		}
		
	}

	return (
		<form>
			{errors.map((item,index) => <p className="errortext" key={index}>{item}</p>)}
			<div className="form-input">
				<label htmlFor="name">Name:</label><br/>
				<input name="name" value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<div className="buttons">
				<button onClick={cancelForm}>Cancel</button>
				<button onClick={submitForm}>Submit</button>
			</div>
		</form>
	);
}

export default AuthorForm;

