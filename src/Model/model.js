/**
 * model.js
 * This class creates a model for the Mongoose object to use when
 *  creating data for a database entry. Only the model for the json stored
 *  in the database should be in this file
 */

 const mongoose = require('mongoose')

 // Example Schema for database model
 var schema = new mongoose.Schema({
    name: {
        type:String, 
        required: true
    },
    email: {
        type:String, 
        required: true,
        unique:true
    },
    phone_number: {
        type:String, 
        required: true,
        unique: true
    },
})

// example name, this can all be modified to meet our needs
const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;