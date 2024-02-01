const express = require('express')
const mongoose = require('mongoose')

const url= 'mongodb://localhost/bmsDb'

const app = express()

mongoose.connect(url)

const con=mongoose.connection

con.on('open', function(){
    console.log('connected')
})

app.use(express.json())

const bmsRouter=require('./routers/bms')
app.use('/bms',bmsRouter)

app.listen(9000, function(){
    console.log('server started')
})