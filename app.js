const express = require('express')
const app = express()
const path = require('path')
const port = 8080
const data = require('./data.js')
const {writeFileSync} = require('fs')

app.get('/', (req, res) => {
    logRequest(req)

    res.status(200).sendFile(path.resolve(__dirname, './index.html'))
})

app.get('/api/products', (req, res) => {
    logRequest(req)

    const refined_products = data.products.map((product) => {
        const {name, id} = product
        return {name, id}
    })
    res.status(200).json(refined_products)
})

app.get('/api/products/:product_id', (req, res) => {
    logRequest(req)

    const refined_product = data.products.find((product) => product.id === req.params.product_id)

    if(!refined_product){
        return res.status(404).send('Product does not exist')
    }

    res.status(200).json(refined_product)
})

app.get('/api/v1/query', (req, res) => {
    logRequest(req)

    console.log(req.query)
    res.status(200).send('Hello World')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}....`)
})

var time = new Date();
const logRequest = (req) => {
    writeFileSync('./requests.log', 
    `${time.toLocaleTimeString()} | ${time.toLocaleDateString()} | ${req.method} | ${req.protocol}://${req.hostname}:${port}${req.url} \n`, 
    {flag: 'a'})    
}
