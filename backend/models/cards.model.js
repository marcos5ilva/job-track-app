const mongoose = require('mongoose');
const Schema = mongoose.Schema;

cardsSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    content:{
        type: String,
    },
    labels:String,

    //  board:{
    //      type: mongoose.Schema.Types.ObjectId,
    //      ref: 'Board',
    //      required: true,  
    //  },

    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lists',
        required: true,

    }

})

const Cards = mongoose.model('Cards', cardsSchema);
module.exports = Cards;