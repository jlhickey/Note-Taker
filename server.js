//This file contains all of the server implementation for the express server

//Include the express module and the routes
const express = require('express');
const PORT = process.env.PORT || 5001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Listen on the defined port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
