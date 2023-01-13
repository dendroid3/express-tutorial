const express = require('express')
const router = express.Router()
router.use(express.urlencoded({extended: false}))
router.use(express.json())

router.post('', (req, res) => {
    console.log(req.body)
    if(req.body){
        res.send(`Hello there ${req.body.name}!`)
    } else{
        res.status(200).json({error: 'You put no name!'})
    }
})

module.exports = router
