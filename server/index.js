import express from 'express'
import Connection from './Connection/Connection.js'
import bodyParser from 'body-parser'
import AuthRoutes from './Routes/AuthRoute.js'

const app = express()
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

app.listen(3000, ()=>{
    console.log(`Server Setup Success...`)
})

Connection()

app.use('/auth/', AuthRoutes)