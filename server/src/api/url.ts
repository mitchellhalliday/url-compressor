import express from 'express'
import * as mongoDb from 'mongodb'
import uniqueSlug from 'unique-slug'

const mongoClient = mongoDb.MongoClient

const Router = express.Router()

const url = "mongodb://db-service:27017/"
const db_name = "short_urls"
const collection_name = "short_urls"

mongoClient.connect(url)
    .then(client => {

        var db = client.db(db_name)
        var shortUrlCollection = db.collection(collection_name)

        Router.post('/', async (req, res) => {

            const { url } = req.body

            if(!url)
            {
                res.status(402).json({ message: "URL is required" })
                return;
            }

            let slug = "";

            try{
                while(true)
                {
                    slug = uniqueSlug()
                    let existingRecordsCount = await shortUrlCollection.find({ slug }).count()

                    if(existingRecordsCount === 0) break;
                }

                await shortUrlCollection.insertOne({
                    slug,
                    url
                })

                res.json({
                    slug
                })
            }
            catch(err)
            {
                console.error(err)
                res.status(500).json({ message: "Something happened" })
                return
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