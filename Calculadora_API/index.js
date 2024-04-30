import express, { request, response } from "express";

const app = express();
app.get('/api/calculo', (request,response) => {
    console.log(request.query);
    return response.status(200).json({message:'Deu certo!'})
   
});

app.post('/api/calculo', (request, response) => {
    console.log(request.body);
    return response.status(201).json({message:'Cadastrou'})
});

app.listen(3000);