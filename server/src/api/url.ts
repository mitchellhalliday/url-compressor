import express from 'express'

const Router = express.Router()

Router.post('/', (req, res) => {

    const { url } = req.body

    console.log(url)

    res.json({
        short_url: "yoloboi"
    })
})

/*
    Request
    {
        "url": "https://www.google.com"
    }
*/

export default Router