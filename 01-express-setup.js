const path = require('path')
const {writeFileSync} = require('fs')
const express = require('express')

const app = express()

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     logRequest(req)
//     res.sendFile(path.resolve(__dirname, './index.html'))
// })

app.all('*', (req, res) => {
    logRequest(req)
    res.status(404).send(`<h1>Counld not find ${req.url}</h1>`)
})

const port_number = 5000
app.listen(port_number, () => {
    console.log(`Server is listening on port ${port_number}...`)
})

var time = new Date();
const logRequest = (req) => {
    writeFileSync('./requests.log', 
    `${time.toLocaleTimeString()} | ${time.toLocaleDateString()} | ${req.method} | ${req.protocol}://${req.hostname}:${port_number}${req.url} \n`, 
    {flag: 'a'})    
}

