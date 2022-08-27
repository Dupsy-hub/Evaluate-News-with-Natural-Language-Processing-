// Setting .env
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const mockAPIResponse = require('./mockAPI.js');
const fetch = require ('node-fetch');
const axios = require('axios');

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
app.use(express.static('dist'));
console.log(__dirname)

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors allows the browser and server to communicate without any security interruptions
const cors = require('cors');
app.use(cors());


// API
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);
let userInput = []

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST Route
app.post('/api', async function(req, res) {
    //generates the api url, which we retrieve the url input from the handleSubmit 
    userInput = req.body;
    //it also fetches the url data
    console.log(`Input url: ${data.url}`)
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`
    

    const response = await fetch(apiURL)
    const mcData = await response.json()
    console.log(mcData)
    res.send(mcData)
    /** server sends only specified data to the client with below codes
     * const projectData = {
     *  score_tag : mcData.score_tag,
     *  agreement : mcData.agreement,
     *  subjectivity : mcData.subjectivity,
     *  confidence : mcData.confidence,
     *  irony : mcData.irony
     * }
     * res.send(projectData);
     * */
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})