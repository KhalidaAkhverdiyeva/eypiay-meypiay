//  ??????????? 

const express = require('express');
const data = require('./data-api/data.json');
const api = express();


const HOST = 'localhost'
const PORT = 8888;

app.use(express.json());


app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log('Form submitted:', formData);
    res.json({ message: 'Form data submitted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});