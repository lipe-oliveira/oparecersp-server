const mongoose = require("../../database/index");
const mongoose_paginate = require('mongoose-paginate');

const schema = new mongoose.Schema({
    autor:{
        type: String,
        required: true
    },
    title:{
        type:String,
        required:true
    },
    lide: {
        type: String,
        required:false
    },
    container:[
        {
        text: {
            type: String
        },
        datatype:{
            type: String
        },
        data:{
            type: String,
            setMaxListeners: 1000000}
        }
    ],
    format:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

schema.plugin(mongoose_paginate);

const Blog = mongoose.model("Blog", schema);
module.exports = Blog;