import express from 'express';
import {create, read, update, remove} from './services/product-services.js';
const server = express();
server.use(express.json());
server.listen(3000);


server.get('/api/products', (request,response)=>{
    read();
    return response.status(200).json({message: "{GET} Deu certo!"});
});


server.post('/api/products', (request,response)=>{
    const {
        name,
        shortDescription,
        description,
        price,
        category,
        urlBanner
    } = request.body;
    const payload = { 
        name,
        shortDescription,
        description,
        price,
        category,
        urlBanner
    };
    create(payload);
    return response.status(200).json({message: "{POST} Deu certo!"});
});


server.put('/api/products', (request,response)=>{
    console.log('Put funcionando');
    return response.status(200).json({message: "{PUT} Deu certo!"});
});


server.delete('/api/products', (request,response)=>{
    console.log('Delete funcionando');
    return response.status(200).json({message: "{DELETE} Deu certo!"});
});