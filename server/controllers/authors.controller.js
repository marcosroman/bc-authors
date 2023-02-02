const Author = require('../models/authors.model.js');

module.exports = {
	newAuthor:
	  (req, res) => {
			Author.create(req.body)
						 .then(author => res.json(author))
						 .catch(error => res.status(400).json(error));
		},

	findAllAuthors:
		(req, res) => {
			Author.find().sort('name')
			       .then(author => res.json({author}))
			       .catch(error => res.json({msg: "couldn't list all authors",
							                         error: error}))
		},

	findOneAuthor:
		(req, res) => {
			Author.findOne({_id: req.params.id})
			       .then(author => res.json({author}))
			       .catch(error => res.json({msg: "author not found",
						                           error}));
		},

	editAuthor:
		(req, res) => {
			Author.findOneAndUpdate({_id: req.params.id},
				                       req.body, {runValidators: true})
			        .then(author => res.json({author}))
			        .catch(err => res.status(400).json(err));
		},

	deleteAuthor:
		(req, res) => {
			Author.deleteOne({_id: req.params.id})
			        .then(author => res.json({author}))
			        .catch(err => res.json({msg:'delete failed',err}));
		}
}

