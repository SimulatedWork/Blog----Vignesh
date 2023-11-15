import express from 'express'
import Connection from './Connection/Connection.js'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import AuthRoutes from './Routes/AuthRoute.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3001

const app = express()
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json({limit: "30mb"}))
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})

Connection()

app.use('/auth/', AuthRoutes)