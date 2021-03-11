/*
PALAVRAS RESERVADAS
var: escopo global, se for referenciado dentro de um esocpo ele pode funcionar dentro do código todo
let: se for referenciado dentro de um esocpo ele não funciona fora do escopo
const: escopo global, variavel constante, não muito usado
*/
/* javascript não tipa a variável */
/*Acessando o input nome (DOM) */
/*
O javaScript é Case Sensitive = reconhece letras maiusculas e minusculas
Acessar por tag getElementByTagName
por Nome: getElementsByName()
por Classe: getElementByClassName()
POR SELETOR: querySlector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') /*Pois é uma tag, ai coloca o # */
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%' 
email.style.width = '100%'

/*validação de dados sempre colocar dentro de uma função*/
function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk= true
    }
}

function validaAssunto (){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, máximo de 100 caracteres'
        txtAssunto.style.color = 'red'
        txtEmail.style.display = 'block'
    }
    else{
        txtEmail.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
   if (nomeOk == true && emailOk == true && assuntoOk == true) {
      alert ('Formulário enviado com sucesso!')
   } else {
      alert ('Preencha o formulário corretamente antes de enviar...')
   }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
 }
 
 function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
 }