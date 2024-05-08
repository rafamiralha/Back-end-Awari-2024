import express from 'express';
import {create, read, update, remove, searchAddress} from './services/product-services.js';
const server = express();
server.use(express.json());
server.listen(3000);
//completed url e.g: localhost:3000/api/products?name=Iphone&price=4000&category=Smartphone

//localhost:3000/api/orders/address-shipping?zipCode=09810630
//baseUrl localhost:3000
//path /api/products
//query param: ?Produto=Iphone&description=Smartphone


//Por o Axios ser async, a função que chama ele aqui no controller tem que ser também! senão fica pendente a promisse
server.get('/api/orders/address-shipping', async (request, response)=> {
 const {zipCode} = request.query;
 const address = await searchAddress(zipCode)
 return response.status(200).json({message: address});
});


server.get('/api/products', (request,response)=>{
    const {name,description,price,category} = request.query;
    const filter = {name,description,price,category};
    read(filter);
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


server.put('/api/products/:id', (request,response)=>{
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
    const { id } =  request.params;
    update(payload,id)
    return response.status(200).json({message: "{PUT} Deu certo!"});
});


server.delete('/api/products/:id', (request,response)=>{
    const { id } = request.params;
    remove({id});
    console.log('Delete funcionando');
    return response.status(204).json({message: "{DELETE} Deu certo!"});
});