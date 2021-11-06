import express from 'express'
import morgan from 'morgan'
import urlRouter from './api/url'
import slugMiddleware from './middleware/slugMiddleware'
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware'
import path from 'path'

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

app.use(slugMiddleware)

if(process.env.NODE_ENV !== "production") {
    app.use('/', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
}
else {
    app.use(express.static(path.join(__dirname, "..", "client")))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "..", "client", 'index.html'));
    });
}

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})