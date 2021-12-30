const express = require('express');
const router = express.Router();
const Sobre = require('../models/sobre')

router.get('/get_logo', async(req, res) => {
    const sobre= await Sobre.findOne({});
    return( 
        res.send(sobre)
    )
});

router.post('/post_logo', async(req, res) => {
    const sobre = await Sobre.create(req.body);
    return( 
        res.send(sobre)
    )
});
module.exports = (app) => app.use('/server', router);