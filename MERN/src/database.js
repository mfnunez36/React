const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern';

mongoose.set('strictQuery', true);

mongoose.connect(URI)
    .then(() => console.log('DB is Connected'))
    .catch(err => console.error('ERROR: DB conection: ', err));

module.exports = mongoose;