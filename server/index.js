import express from 'express'
import Connection from './Connection/Connection.js'

const app = express()

app.listen(3000, ()=>{
    console.log(`Server Setup Success...`)
})

Connection()