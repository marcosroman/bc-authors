const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'debe introducir un nombre'],
		minLength: [3,'como minimo debe tener 3 caracteres']
	}
}, {timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;

