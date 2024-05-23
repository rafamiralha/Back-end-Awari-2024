import 'dotenv/config'
//DOTENV É UTILIZADO PARA OCULTAR AS INFORMAÇÕES SENSIVEIS DO BANCO DE DADOS

import express from 'express';
import {create, read, update, remove, searchAddress} from './services/product-services.js';
const server = express();
server.use(express.json());
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


server.get('/api/products', async (request,response)=>{
   
    const {name,description,price,category,limit} = request.query;
    const filter = {name,description,price,category,limit};
   const products = await read(filter);
   if (products.length > 0){
   
    return response.status(200).json({products});
   } else {return  response.status(500).json({message: 'Internal Server Error'});}
});


server.post('/api/products', async (request,response)=>{
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
     const product = await create(payload);
     if (product){
      return response.status(200).json({message: "{POST} Deu certo!"});
     }else{
        return response.status(500).json({message: "{POST} não deu certo"});
     }
    
});


server.put('/api/products/:id', async (request,response)=>{
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
 const product = await update(payload,id)
    if(product){
        return response.status(200).json(payload);
    }else{
        return response.status(500).json({message: "Internal Error!"});
    }

});


server.delete('/api/products/:id', async (request,response)=>{
    const { id } = request.params;
  const result = await remove(id);

  if (result){
    return response.status(204).json({message: "{DELETE} Deu certo!"});
   }else{
      return response.status(500).json({message: "{DELETE} não deu certo"});
   }
    
});
//banco de dados
//localhost ou 127.0.0.1
//usuario: root
//banco: awari