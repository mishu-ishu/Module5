const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function() {
  console.log('connected...')
})

const Router = require('./routes/aliens')
app.use('/alien', Router)

app.listen(9000, () => {
  console.log('listening to server...')
})