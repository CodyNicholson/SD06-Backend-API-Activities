let http = require('http')
let server = http.createServer(function (req, res) {
    res.writeHeader(206)
    res.write('<h1>Bark!</h1><img src="https://httpstatusdogs.com/img/206.jpg" alt="206">')
    res.end()
})

server.listen(3000, function () {
    console.log('I am awake!')
})