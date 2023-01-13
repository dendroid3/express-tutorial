const {writeFileSync} = require('fs')
const port = 5000
const logger = (req, res, next) => {
    const time = new Date()
    writeFileSync('./requests.log', 
    `${time.toLocaleTimeString()} | ${time.toLocaleDateString()} | ${req.method} | ${req.protocol}://${req.hostname}:${port}${req.url} \n`, 
    {flag: 'a'})
    next()
}

module.exports = logger
