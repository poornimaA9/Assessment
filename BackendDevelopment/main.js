const express = require('express');
const bodyParser = require('body-parser');
const contactController = require('./controllers/contactController');
const cors = require('cors');

const app = express();
const port = 3006;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route
app.post('/submit', contactController.handleFormSubmission);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
