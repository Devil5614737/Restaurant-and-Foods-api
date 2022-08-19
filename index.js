const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const restaurants = require('./data/restaurants');


dotenv.config({
    path: './.env'
})

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    return res.status(200).send('Welcome to Restaurant and Food api..')
})


// get restaurants
app.get('/restaurants', (req, res) => {
    return res.status(200).json(restaurants)
})
// query
app.get('/search', (req, res) => {
    const query = req.query
    const {
        search
    } = query
    const queryTerm = search.toLowerCase().replace(/ /g, '')
    const rest = restaurants.filter(item =>{
        if( item.menu.find(i => i.title.toLowerCase().includes(queryTerm))){
            return item
        }
    })
    res.json(rest)
})


// search restaurants


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})