const express = require('express');
const router = express.Router();
const Blog = require("../models/blog");

router.post('/blog', async(req, res) => {
    try{
        const{title, lide, format} = req.body;

        console.log(req.body);

        const blog = await Blog.create(req.body);

        return res.send({blog});
    }
    catch(err){
        console.log("erro:" + err);
    }
});

router.get('/list:page', async (req, res)=>{
    try{
        const {page = 1} = req.query;

        return res.send(await Blog.paginate({}, {page, limit:10}));
    }
    catch(err){

    }
});


router.get('/listById/:id', async (req, res)=>{
    try{        
        return res.send(await Blog.findById(req.params.id));
    }
    catch(err){

    }
});

router.post('/delete', async (req, res)=>{
    try{
        const { _id } = req.body
        await Blog.findByIdAndRemove({_id})
        return res.send(await Blog.findByIdAndRemove({_id}));
    }
    catch(err){

    }
});

module.exports = (app) => app.use('/server', router);