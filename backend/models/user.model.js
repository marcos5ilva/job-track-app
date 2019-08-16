const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type: String,
        require:true,
        trim: true,
        minlength: 3
    },
    lastName:{
        type: String,
        require:true,
        trim: true,
        minlength: 3
    },
    email:{
        type: String,
        require:true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        require:true,
        minlength: 6,
    },
}, {
    timestamps:true,
});

userSchema.pre('save', async function(next){
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;