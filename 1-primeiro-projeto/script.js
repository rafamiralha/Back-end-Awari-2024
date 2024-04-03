const btn = document.getElementById('btnClickAq');
const result = document.getElementById('result');

/*
console log é muito usado para debug em muitos casos*/ 

btn.addEventListener('click',(e) =>{
    e.preventDefault();
    
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;
    result.innerHTML = Number(num1)+Number(num2);
})

