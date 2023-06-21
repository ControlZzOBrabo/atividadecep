const pesquisa = document.querySelector('#pesquisa')
const resposta1 = document.querySelector('#resposta1')
const resposta2 = document.querySelector('#resposta2')
const resposta3 = document.querySelector('#resposta3')
const resposta4 = document.querySelector('#resposta4')
const resposta5 = document.querySelector('#resposta5')
const resposta6 = document.querySelector('#resposta6')
const resposta7 = document.querySelector('#resposta7')
const resposta8 = document.querySelector('#resposta8')
const resposta9 = document.querySelector('#resposta9')
const resposta10 = document.querySelector('#resposta10')

pesquisa.addEventListener('click', ()=>{
    const pesq_cep = new XMLHttpRequest()
    const cep = document.querySelector('#cep').value
    // pesq_cep.open('GET', 'https://viacep.com.br/ws/22080050/json/')
    pesq_cep.open('GET', 'https://viacep.com.br/ws/'+cep+'/json/')
    pesq_cep.send()
    pesq_cep.onload = function(){
    let objeto_cep = JSON.parse(pesq_cep.responseText)
    // console.log(objeto_cep.logradouro)


    resposta1.innerHTML = objeto_cep.cep
    resposta2.innerHTML = objeto_cep.logradouro
    resposta3.innerHTML = objeto_cep.complemento
    resposta4.innerHTML = objeto_cep.bairro
    resposta5.innerHTML = objeto_cep.localidade
    resposta6.innerHTML = objeto_cep.uf
    resposta7.innerHTML = objeto_cep.ibge
    resposta8.innerHTML = objeto_cep.gia
    resposta9.innerHTML = objeto_cep.ddd
    resposta10.innerHTML = objeto_cep.siafi
    }
    // console.log(objeto_cep)
})