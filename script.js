let adultos = document.getElementById("adultos")
let criancas = document.getElementById("criancas")
let horas = document.getElementById("hours")
let calcular = document.getElementById("calcular")
let resultado = document.getElementById("resultado")
let calculando = document.getElementById("calculando")

calculando.addEventListener("click", calc)

carnePP = function(horas){
    if(horas > 5){
        return 500
    } else{
        return 300
    }
}  

aguaPP = function(horas){
    if(horas > 5){
        return 2000
    } else{
        return 1200
    }
}  

refriPP = function(horas){
    if(horas > 5){
        return 3000
    } else{
        return 2000
    }
}  

function calc(){
    let consumoCarne = adultos.value * carnePP(horas.value) + (criancas.value * carnePP(horas.value) * 0.5)
    let consumoAgua = adultos.value * aguaPP(horas.value) + (criancas.value * aguaPP(horas.value) * 0.5)
    let consumoRefri = adultos.value * refriPP(horas.value) + (criancas.value * refriPP(horas.value) * 0.5)
    
    resultado.innerHTML = `<p>${consumoCarne / 1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${consumoAgua / 1000}L de Agua</p>`
    resultado.innerHTML += `<p>${consumoRefri / 1000}L de Refrigerante</p>`
}


// 300g de carne por adulto, acima de 5 horas 500g
// 1200ml de agua por adulto, acima de 5, 2000ml
// 2000ml de refrigerante por adulto, acima de  5, 3000ml
// criança = 0.5