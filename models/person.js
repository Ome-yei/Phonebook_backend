require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.DATABASE_CONNECTION_URL;

// Establish connection with the database
mongoose.connect(url)
    .then(result => {
        console.log("Connection with DB establiseh...");
    })
    .catch((error) => {
        console.log("Error, cannot establish connection...");
    });

// Create a Schema
const personSchema = new mongoose.Schema({
    name: String,
    phone: String
});

// Remove extra params passed back by MDB 
personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('Person', personSchema);
