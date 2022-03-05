// Get the environment variables.
require('dotenv').config();

// Require needed node modules.
const express = require('express');
const app = express();

app.post('/:color', (req, res) => {
    res.send('Hello world')
});

app.get('/:color', function (req, res) {
    let myColor = req.params.color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${myColor} Page</h1>
        </body>
    `)
})

// Listen to a port number defined by a local environment variable.
console.log(process.env.PORT);
app.listen(process.env.PORT);