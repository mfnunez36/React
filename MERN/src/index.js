const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();

//config
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json()); 

// Routes
app.use('/api/tareas', require('./routes/tareas.routes'));

// static Files
app.use(express.static(path.join(__dirname, '/public')))


// start server
app.listen(app.get('port'), () => {
    console.log(`server on port ${ app.get('port') }`);
});