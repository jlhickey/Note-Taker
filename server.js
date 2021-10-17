// Require Dependencies
import express, { urlencoded, json, static } from "express";
import fs from "fs";
import path from 'path';

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Setup data parsing
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(static(__dirname));

//Require routes file
require('./routes/routes')(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  
