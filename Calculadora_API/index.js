import express, { request, response } from "express";
import {soma,subtracao} from './services/calculadora.js';
const app = express();

app.use(express.json());

app.get('/api/calculo', (request,response) => {
    console.log(request.query);
    console.log(request.params)
    return response.status(200).json({message:'Deu certo!'})
   
});

app.post('/api/calculo', (request, response) => {
    if(request.body.operacao === '+'){
        return  response.status(201).json({
           resutado: soma( request.body.primeiroNumero,request.body.segundoNumero) 
        })
    }else if(request.body.operacao === '-'){
        return  response.status(201).json({
           resutado: Number( request.body.primeiroNumero) - Number(request.body.segundoNumero) 
        })
    }else if(request.body.operacao === '*'){
        return  response.status(201).json({
           resutado: Number( request.body.primeiroNumero) * Number(request.body.segundoNumero) 
        })
    }else if(request.body.operacao === '/'){
        return  response.status(201).json({
           resutado: Number( request.body.primeiroNumero) / Number(request.body.segundoNumero) 
        })
    }else (response.status(400).json({message:"Operação Não identificada"}))
});

app.listen(3000);