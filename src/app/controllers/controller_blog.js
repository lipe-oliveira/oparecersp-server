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

router.post('/post_produto_img', async(req, res) => {
    try{
        const{id, img} = req.body;

        const produto = await Produtos.findById(id);

        pusher = {
            imagem:img
        }
        await produto.imgs.push(pusher)
        await produto.save()

        return res.send(produto);
    }
    catch(err){
        console.log(err);
    }
});

router.get('/get_produtos', async (req, res)=>{
    try{
        const {page = 1} = req.query;

        return res.send(await Produtos.paginate({}, {page, limit:10}));
    }
    catch(err){

    }
});

router.post('/post_get_produtos_imgs', async (req, res)=>{
    try{
        const {id} = req.body;
        produto = await Produtos.findById(id);
        console.log( produto );

        const { imgs } = produto;


        return res.send({imgs});

    }
    catch(err){
        console.log(err);
    }
});


router.get('/get_produtos/:id', async (req, res)=>{
    try{
        
        return res.send(await Produtos.findById(req.params.id));
    }
    catch(err){

    }
});

router.post('/delete', async (req, res)=>{
    try{
        const { _id } = req.body
        await Produtos.findByIdAndRemove({_id})
        return res.send(await Produtos.findById({_id}));
    }
    catch(err){

    }
});

module.exports = (app) => app.use('/server', router);