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


export {create, read, update, remove};