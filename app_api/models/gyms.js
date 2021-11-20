const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({

        days:{
            type: String,
            required: true
        },
        opening: String,
        closing: String,
        closed: {
            type: Boolean,
            required: true
        } 
});

const gymSchema = new mongoose.Schema({ 
    
    locationName: {
        type: String,
        required: true
    },
    tags: [String],
    distance: Number,
    address: String,
    openingTimes: [openingTimeSchema],
    kidFriendly: Boolean

});