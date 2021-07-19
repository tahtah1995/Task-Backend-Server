const express = require('express');

const app  = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const mongoose = require('mongoose');


app.get('/posts' , (req ,res) =>{
    res.send('we are on');
    
    });

    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true ,  useUnifiedTopology: true}, () => console.log('connected'))

app.listen(3000);