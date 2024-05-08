import axios from 'axios';

const create = (product) => {
    console.log(product);
} 

const update = (product, id) => {
    console.log(product, id);
} 

const read = (filter) => {
    console.log(filter);
} 

const remove = (id) => {
    console.log(id);
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