import express from 'express'
import morgan from 'morgan'
import urlRouter from './api/url'

const app = express()

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