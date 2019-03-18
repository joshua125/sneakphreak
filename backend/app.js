const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const sneaker = require('../backend/models/sneaker');
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://codex:H7pPL7b8BLnXRQj8@cluster0-rtcpi.mongodb.net/test?retryWrites=true")
.then(()=>{
    console.log('MongoDB Cluster Connected... ')
}).catch(()=>{
    console.log('Connection Failed')
})

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", 
    "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

app.post("/api/catalog", (req, res ,next)=>{
    const sneakerPost = new sneaker({
        // id: req.body.id + req.body.name,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    });
    sneakerPost.save().then(createdSneaker=>{
        
    res.status(201).json({
        message:'sneaker successfully posted for sale',
        sneakID: createdSneaker._id
    });
    // console.log(sneakerPost)

    });
})



app.get('/api/catalog',(req,res,next)=>{
    sneaker.find()
        .then(documents =>{
            // console.log("DB items::" + documents)

        res.status(200).json({
            message: 'Catalog fetches success',
            catalog: documents
            });
        });
});

app.delete("/api/catalog/:id", (req, res, next)=>{
    console.log(req.params.id);
    sneaker.deleteOne({_id: req.params.id}).then(results=>{
        console.log(results)
        res.status(200).json({message: "Post Deleted"})

    })
})

module.exports = app;