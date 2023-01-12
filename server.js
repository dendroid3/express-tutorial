console.log('Server started at port port 5000...')

const http = require('http')

const {readFileSync} = require('fs')

const server = http.createServer((req, res) => {
    console.log('user hit the server')
    console.log(`${req.method} ${req.host} ${req.url}`)

    const url = req.url

    if(url === '/'){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(readFileSync('./index.html'))
        res.end()
    } else if(url === '/about'){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(readFileSync('./about.html'))
        res.end()
    } else if(url === '/contact'){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write('<h1> Contact page </h1>')
        res.end()
    } else {
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.write('<h1> Not found </h1>')
        res.end()
    }

    
})

server.listen('5000')
