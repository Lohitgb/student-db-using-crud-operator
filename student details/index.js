const express = require('express');
const mongoose = require('mongoose');

//IMPORT FILE ROUTES TO INDEX JS
const router = require('./routes');


const uri = "mongodb+srv://LohitGB:lohitgb3145@studentdata.3evovkv.mongodb.net/studentdata?retryWrites=true&w=majority"

async function connect() {
    try{
    await mongoose.connect(uri);
    console.log("connected to the database");
} catch (error){
    console.error(error);
}
}



const app = express();
app.use(express.json())
app.use(router);

connect();

app.listen(3000, () =>{
    console.log('server started at 3000')
})


