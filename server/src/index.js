const express = require('express')
const morgan = require('morgan')
const app = express()

const urlRouter = require('./api/url')


/*

 Middleware

*/

app.use(morgan('dev'))
app.use(express.json())

/*

 Api Routes

*/

app.use('/api/url', urlRouter)

/*

 General Routes

*/

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})