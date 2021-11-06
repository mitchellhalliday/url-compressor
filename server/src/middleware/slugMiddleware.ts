import express from 'express'
import * as mongoDb from 'mongodb'

const mongoClient = mongoDb.MongoClient

const Router = express.Router()

const url = "mongodb://db-service:27017/"
const db_name = "short_urls"
const collection_name = "short_urls"

mongoClient.connect(url)
    .then(client => {

        var db = client.db(db_name)
        var shortUrlCollection = db.collection(collection_name)

        Router.get('/:slug', async (req, res, next) => {

            const { slug } = req.params

            if(slug) {
                try{                    
                    let shortUrl = await shortUrlCollection.find({ slug }).toArray()
                    
                    if(shortUrl.length === 1) {
                        res.redirect(shortUrl[0].url)
                    }
                    else {
                        next()
                    }
                }
                catch (err) {
                    console.error(err)
                    next()
                }
            }
            else {
                next()
            }
        })
    })
    .catch(err => {
        console.error(err)        
    })

/*
    Request
    {
        "url": "https://www.google.com"
    }
*/

export default Router