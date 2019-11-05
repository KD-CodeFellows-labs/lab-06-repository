'use strict';

// npm packages - 3rd party
require(‘dotenv’).config()
const express = require(‘express’);
const cors = require(‘cors’);
// application constant
const app = express();
const PORT = process.env.PORT || 3000;
app.get(‘/cool’, (request, response) => {
 response.send(‘cool data from the / cool route’);
});







