const dotenv = require('dotenv').config('./.env')
const express = require('express')
const dbConnect = require('./Config/dbConnect')
dbConnect()
const { errorHandler, notFound } = require('./Middlewares/errorHandler')
const app = express()
const cors = require('cors')

const mainRouter = require('./Routes/MainRoutes')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api',mainRouter)

app.use(notFound)
app.use(errorHandler)


app.listen(process.env.PORT,()=>{
    console.log(`server running on ${process.env.PORT}`)
})