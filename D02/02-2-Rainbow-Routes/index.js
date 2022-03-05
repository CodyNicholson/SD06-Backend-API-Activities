// Get the environment variables.
require('dotenv').config()

// Require needed node modules.
const express = require('express')
const app = express()

// Declare routes that people can visit on the application.
app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `)
})

// Teal Page
app.get('/teal', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: teal;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: teal;">Teal Page</h1>
        </body>
    `)
})

// Crimson Page
app.get('/crimson', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: crimson;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: crimson;">Crimson Page</h1>
        </body>
    `)
})

// Color Page
app.get('/:color', function (req, res) {
    let myColor = correctCasing(req.params.color);

    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${myColor} Page</h1>
        </body>
    `)
})

app.get('*', function (req, res) {
    res.send("Not ugly error!")
})

app.post('*', function (req, res) {
    res.send("Not ugly error!")
})

function correctCasing(colorName) {
    colorName = colorName.toLowerCase();
    let firstCharacter = colorName[0].toUpperCase();
    return firstCharacter + colorName.substring(1);
}

// Listen to a port number defined by a local environment variable.
app.listen(process.env.PORT)
