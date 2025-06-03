const express = require('express');
const userModel = require('./models/user');
const app=express();
const path = require('path');

app.set('view engine',"ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/read',async(req,res)=>{
    let allusers=await userModel.find();
    res.render("read",{users:allusers});
})
app.post('/create',async(req,res)=>{
    let {name,email,imageurl}=req.body;
    let createduser=await userModel.create({
        name,
        email,
        imageurl
    })
    res.send(createduser)
})

app.listen(3000);