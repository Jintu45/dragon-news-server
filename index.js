
const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const categories = require('./data/Categories.json');
const { application } = require('express');
app.use(cors())

app.get('/', (req, res) => {
    res.send('server side worked now')
})
app.get('/news-categories', (req, res) => {
    res.send(categories)
})
app.listen(port, ()=>{
    console.log('server', port)
})