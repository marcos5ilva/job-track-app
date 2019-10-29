const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const boardSchema = new Schema(
    [ listSchema ]
);

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

cardsSchema = new Schema ({
    id: {
        type: Number,
        required: true,
    },
    content:{
        type: String,
    },
    labels:[labelsSchema],

    user: {
        type: String,

    }

});

const labelsSchema = new Schema({
    labels: String,
    

}); 

const Board = mongoose.model('Board', boardSchema);
module.exports = Board;