// Load Environment variables
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const db_utils = require('./utilities/connect-db').db

const app = express()
const PORT = process.env.PORT || 5000;
const memberRoutes = require('./routes/member')

//connecting to Dbase
db_utils.connect()

// CORS config
// const whitelist = ['http://localhost:3000/*', 'http://example2.com']
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1 || !origin) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// Connecting middlewares
app.use(express.json())
// app.use(cors(corsOptions))
app.use(cors())

app.use('/members', memberRoutes)

// Other routes
app.get('/', (req,res) => {
    res.send('Welcome to Xigma CRUD Challenge Api -- Backend with Nodejs')
})

// starting serve
app.listen(PORT, ()=>{ console.log(`Server live on port ${PORT}.`)})
