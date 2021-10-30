const express = require('express')

const Router = express.Router()

Router.post('/', (req, res) => {

    const { url } = req.body

    console.log(url)

    res.json({
        short_url: "/yoloboi"
    })
})

/*

    Request
  {
      "url": "https://www.google.com"
  }

*/

module.exports = Router