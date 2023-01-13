const express = require('express')
const router = express.Router()
let {people} = require('../data')

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: people
    })
})

router.post('/', (req, res) => {
    const name = req.body.name
    console.log(req.body.name)
    if(name){
        const person = {
            name: name,
            id: (people.length + 1)
        }
    
        people.push(person)
    
        res.status(200).json({
            success: true,
            person: name
        })

    } else {
        res.status(200).json({
            error: 'name not provided'
        })
    }
    
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    console.log(id);
    console.log(name);
    res.send('OK')
})

module.exports = router
