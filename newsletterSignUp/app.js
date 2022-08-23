const express = require("express");
const https = require("https");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
        res.sendFile(__dirname + "/signup.html");
});

app.post('/', function(req, res) {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName,lastName, email);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// API Key
// df54d19a9a50f7dda8807af91272bbc2-us14