const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;



const labelsSchema = new Schema({
    labels: String,

}); 

 cardsSchema = new Schema ({
     id: {
         type: Number,
         required: true,
     },
     content:{
         type: String,
     },
     labels:String,

     user: {
         type: String,

     }

 });

 
 const listSchema =  new Schema({

    title :{
        type: String,
         required: true,  
     },

    creatable: {
         type: Boolean,
     },

     cards: [cardsSchema]
 });

 const boardSchema = new Schema({
    board: [listSchema]
});

const Board = mongoose.model('Board', boardSchema);
module.exports = Board;