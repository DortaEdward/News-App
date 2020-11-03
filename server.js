// importing env variables
require('dotenv').config()
const APIKEY = process.env.APIKEY

const express = require('express');
const PORT = 3000;
const app = express();

// api variables
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(`${APIKEY}`)
let content = {}

app.use(express.static('public'))



app.get('/',async(req, res)=>{
        newsapi.v2.topHeadlines({
          country: 'us'
        }).then(response => {
            content = response.articles
          console.log(content);
        });
    res.render('./index.ejs',{
        articles : content
    })
})



app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})
