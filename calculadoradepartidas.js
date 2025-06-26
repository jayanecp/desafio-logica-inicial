function calcularRank (vitoria, derrota){
    let resultado = vitoria - derrota
    return resultado
}
let saldo = calcularRank(20,5)
console.log(saldo)

let nivel
if (saldo < 10){  
    nivel = "Ferro"
}
    
else if (saldo >= 11 && saldo <= 20){
    nivel = "Bronze"
}

else if (saldo >= 21 && saldo <=50){
    nivel = "Prata"
}

else if(saldo >= 51 && saldo <= 80){
    nivel = "Ouro"
}

else if(saldo >= 81 && saldo <= 90){
    nivel = "Diamante"
}

    else if(saldo >= 91 && saldo <= 100){
    nivel = "Lendário"
}

else {
    nivel = "Imortal"
}
console.log (`O herói tem saldo de ${saldo} e está no nível de ${nivel}`);

