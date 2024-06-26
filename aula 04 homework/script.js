const cep = document.getElementById('cep');
const city = document.getElementById('city');
const street = document.getElementById('street');
const neighborhood = document.getElementById('neighborhood');
const state = document.getElementById('state');

cep.addEventListener(blur, async (e) => {
e.preventDefault();

    await fetch (`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(response => {
            return response.json().then(
                data => {
                    street.value  = data.logradouro;
                    neighborhood.value= data.bairro;
                    city.value = data.localidade;
                    state.value = data.uf;
                    sessionStorage.setItem("adress", JSON.stringify(data));
                }



            )



        })


})
