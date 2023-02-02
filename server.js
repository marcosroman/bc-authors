const express = require('express');
const cors = require('cors');

const app = express()
const PORT = 8000;

require('./server/config/mongoose.config');

// no entiendo bien que estoy haciendo aca...
app.use(cors(),
	      express.json(),
	      express.urlencoded({extended: true}));

const Routes = require('./server/routes/autores.routes.js');
Routes(app);

app.listen(PORT,
	() => console.log('listening at', 8000));

