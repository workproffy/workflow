const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();
const port = 5000;

app.use(morgan('combined'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'ui','index.html'));
});

app.get('/styles.css', (req,res) => {
    res.sendFile(path.join(__dirname,'ui','styles.css'));
});

app.get('/main.js', (req,res) => {
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.listen(port, () => {
    console.log(`Server is now running on port ${port}!!!`);
});