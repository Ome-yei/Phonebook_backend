require('dotenv').config();
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const url = process.env.DATABASE_CONNECTION_URL;

// Establish connection with the database
mongoose.connect(url)
    .then(result => {
        console.log("Connection with DB established...");
    })
    .catch((error) => {
        console.log("Error, cannot establish connection...");
    });

// Create a Schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        unique: true
    },
    phone: {
        type: String,
        minlength: 8
    }
});

personSchema.plugin(uniqueValidator);

// Remove extra params passed back by MDB 
personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('Person', personSchema);
