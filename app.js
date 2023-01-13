const express = require('express')
const app = express()
const port = 5000
const people_router = require('./routes/people')
const auth_router = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api/people', people_router)
app.use('/login', auth_router)

app.listen(port, () => {
    console.log(`Listening on port ${port}....`)
})
