import { Link } from 'react-router-dom';
import AuthorForm from '../forms/AuthorForm';

const NewAuthor = (props) => {
	return (
		<div>
			<Link to="/">Home</Link>
			<p>Add a new author:</p>
			<div>
				<AuthorForm />
			</div>
		</div>
	);
}

export default NewAuthor;

