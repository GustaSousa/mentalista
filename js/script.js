var randonnumer = parseInt(Math.random() * 11);
console.log(randonnumer);

function pegarchute() {
    var valordousuario = document.querySelector("input").value;
    var p = document.querySelector("p");
    
    if (randonnumer == valordousuario){
        p.textContent = "Você acertou o número, parabéns!";
    }
    else if (randonnumer >= valordousuario) {
        p.textContent = "Você errou, O número é maior!"; 
    }
    else if (randonnumer <= valordousuario) {
        p.textContent = "Você errou, O número é menor!"; 
    }
    else{
        p.textContent = "Alternativa inválida";
    }
}

document.querySelector("button").addEventListener("click", pegarchute);