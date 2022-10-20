

const express = require("express");
const app = express();


const cors = require('cors');
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


projectData = {};


app.use(express.static('website'));

app.post('/', async (req, res) => {
    const info = await req.body;
    projectData = info;
    res.send(projectData);
});

const port = 3500;

const listening = () =>
console.log(`Server running at on port ${port}`);


app.listen(port, listening);