let nomeHeroi = "Reinaldo";
let qtdXp = 10000;
let nivel;

if(qtdXp <= 1000){
    nivel = "Ferro";
} else if(qtdXp > 1000 && qtdXp <= 2000){
    nivel = "Bronze";
} else if(qtdXp > 2000 && qtdXp <= 5000){
    nivel = "Prata";
} else if(qtdXp > 5000 && qtdXp <= 7000){
    nivel = "Ouro";
} else if(qtdXp > 7000 && qtdXp <= 8000){
    nivel = "Platina";
} else if(qtdXp > 8000 && qtdXp <= 9000){
    nivel = "Ascendente";
} else if(qtdXp > 9000 && qtdXp <= 10000){
    nivel = "Imortal";
} else if(qtdXp > 10000){
    nivel = "Radiante";
}

console.log("O Herói " + nomeHeroi + " está no nível de "+ nivel); 