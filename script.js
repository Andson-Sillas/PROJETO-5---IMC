//let nome = document.querySelector("#nome")
//let altura = document.querySelector("#altura")
//let peso = document.querySelector("#peso")
let botao = document.querySelector("#botao-calculo")
let resposta = document.querySelector("h2")
let span = document.querySelector(".calculo")
calculo = 0




botao.addEventListener("click",function(e){
   e.preventDefault()

   const nome = document.querySelector("#nome")
   const value = nome.value

   let altura = document.querySelector("#altura")
   let valuealtura = altura.value

   let peso = document.querySelector("#peso")
   const valuepeso = peso.value
   
   calculo = (valuepeso / Math.pow(valuealtura,2)).toFixed(1)

   resposta.innerHTML = `${value}, seu peso é kg: ${valuepeso} e altura: ${valuealtura}`
   span.innerHTML =`Seu IMC é: ${calculo}`  


})




