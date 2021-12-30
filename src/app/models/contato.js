const mongoose = require("../../database/index");
const mongoose_paginate = require('mongoose-paginate');

const schema = new mongoose.Schema({
    dono:{
        type: String,
        required: true
    },
    wpp:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    destaque_fotos:[
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

const Contato = mongoose.model("Contato", schema);
module.exports = Contato;