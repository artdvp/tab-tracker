console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/*
get 
post
put
patch
delete
*/

app.get('/status',(req, res) =>{
    res.send({
        message: 'hello world'
    })
})

app.post('/register',(req, res) =>{
    res.send({
        message: `Hello ${req.body.email}! Your user was registerd! Have fun`
    })
})
app.listen(process.env.PORT || 8081)