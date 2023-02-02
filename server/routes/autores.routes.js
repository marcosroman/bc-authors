const Controller = require('../controllers/authors.controller');

module.exports = app => {
	app.get("/api/authors", Controller.findAllAuthors);
	app.get("/api/authors/:id", Controller.findOneAuthor);
	app.post("/api/authors/new", Controller.newAuthor);
	app.put("/api/authors/edit/:id", Controller.editAuthor);
	app.delete("/api/authors/delete/:id", Controller.deleteAuthor);
}

