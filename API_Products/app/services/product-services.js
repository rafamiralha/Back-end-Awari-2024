
import axios from 'axios';
import connection from '../database/mysql/index.js';

//COMO O ADCIONAR  DADOS NO BANCO DE DADOS
const create = async (product) => {
    try{
        await connection.query(`insert into products (
            name,
            shortDescription,
            description,
            price,
            category,
            urlBanner) values (
            '${product.name}',
            '${product.shortDescription}',
            '${product.description}',
            ${product.price},
            '${product.category}',
            '${product.urlBanner}')`)
            return true 
            }catch(error){
                console.log(error)
                return false 
            } 
   
} 

const update = async (product, id) => {
    try{
       await connection.query(`update products set
        name = '${product.name}',
        shortDescription = '${product.shortDescription}' ,
        description = '${product.description}',
        price = ${product.price},
        category = '${product.category}',
        urlBanner = '${product.urlBanner}' where id = ${id}`) 
        return true;
    }catch(error){
        console.log(error)
        console.log(product)
        return false
    }
   
    console.log(product)
} 
   //uma query sempre tem callback

const read = async (filter) => {

   try {
    const products =  await connection.query(`select * from products where name LIKE '%${filter.name}%'
    or category LIKE '%${filter.category}%'
    limit ${filter.limit}
    `)
    return products[0];
   }catch(error){
    console.log(error);
    return [];
   }
     
} 

const remove = async  (id) => {
    //COMO REMOVER ITENS NO BANCOD DE DADOS 
    try{
        await connection.query(`delete from products where id  = ${id} `)
        return true
    }catch(error){
        console.log(error)
        return false
        //throw new Error(); é usado para informar o erro e parar a execução 
    }

    
} 

const searchAddress = async (zipCode) => {
    const {data} = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)
    return data;
} 

// A função abaixo comentada não funcionaria corretamente porque é um procedimento async e ficou dependendo da resposta de uma promisse sem resposta. 
// const searchAddress = (zipCode) => {
//     address = axios.get('https://viacep.com.br/ws/01001000/json/')
//  return address;
// } 



export {create, read, update, remove, searchAddress};