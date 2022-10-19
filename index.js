const express=require ('express');
const Contas =require ('./Controller/contas.js');

const app = express ()

app.listen ("3000",()=>{
    console.log ("rodou")
})
Contas.router(app)
