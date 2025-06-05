//delarando a variável para armazenar o nome e a quantidade de xp
let nameHeroi = "Lucius"
let quantiaXp = 3150
let nivel = " ";
if (quantiaXp < 1000 ){
    nivel = "ferro"
    
}
else if (quantiaXp >= 1001 && quantiaXp <= 2000) {
    nivel = "Bronze"
}
else if (quantiaXp >= 2001 && quantiaXp <=5000){
   nivel = "Prata"
}
else if (quantiaXp >= 5001 && quantiaXp <= 7000) {
    nivel = "Ouro"
}
else if (quantiaXp >= 7001 && quantiaXp <= 8000){
    nivel = "Platina"
}
else if (quantiaXp >= 8001 && quantiaXp <= 9000){
    nivel = "Ascendente"
else if (quantiaXp >= 9001 && quantiaXp <= 10000){
   nviel = "Imortal"
}
else 
   nivel = "Radiante"

//Saída
    console.log ( "O herói" + {nameHeroi} + "está no nível" {nivel} )
