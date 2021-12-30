const mongoose = require("../../database/index");
const mongoose_paginate = require('mongoose-paginate');

const schema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    desc:{
        type:String,
        required:true
    },
    valor: {
        type: String,
        required:true
    },
    imgs:[
        {
        imagem:{
            type: String,
            setMaxListeners: 100000000000000000000000000000000000000000000000        }
    }
],
    createdAt:{
        type: Date,
        default: Date.now
    }
});

schema.plugin(mongoose_paginate);

const Produtos = mongoose.model("Produtos", schema);
module.exports = Produtos;