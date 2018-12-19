const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require('body-parser');

// pg database integration
const Pool = require('pg').Pool;
var config = {
    user:"postgres",
    database:"postgres",
    host:"0.0.0.0",
    password:"toor",
    port:"5432"
};

var pool = new Pool(config);

const app = express();
const port = 5000;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'ui','index.html'));
});

app.get('/styles.css', (req,res) => {
    res.sendFile(path.join(__dirname,'ui','styles.css'));
});

app.get('/main.js', (req,res) => {
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

// To register a user (cleaner/owner)
app.post('/register', (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    pool.query('INSERT INTO "login" (user,pass) VALUES ($1,$2)', [username,password], (err, result) =>{
        if(err){
            res.status(500).send(err.toString());
        }else{
            res.send("REGISTERED");
        }
    });
});

// To login a user (cleaner/owner)
app.post('/login', (req,res) => {
    res.send("LOGGED IN");
});

// To logout a user (cleaner/owner)
app.get('/logout', (req,res) => {
    res.send("LOGGED OUT");
});






app.listen(port, () => {
    console.log(`Server is now running on port ${port}!!!`);
});