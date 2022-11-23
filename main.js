let send = document.getElementById("send"); // ENVOIE

let result = document.getElementById("result"); // Valeur du input

let check = document.getElementById("text"); // JOUEURS

let ordinateur = Math.floor(Math.random() * 100); // Le bot choisi un chiffre

let starded = false;

document.getElementById("demar").addEventListener("click", function (){
     start();

})

let tenta = 0;

send.addEventListener("click", function (){
    send_result();
})

function send_result() {
    while(tenta < 11){
        result.innerHTML = "Votre résultat est " + check.value + "  Résultat bot " + ordinateur ;
        if (parseInt(check.value) < ordinateur){
            result.innerHTML = "Le résultat est  plus grand"  +" / Nombre de tentatives :" + tenta;
            tenta++;
            break;

        }
        else if(parseInt(check.value) > ordinateur){
            result.innerHTML = "Le résultat est plus petit" + " /  Nombre de tentatives :" + tenta;
            tenta++;
            break;
        }
        else{
            result.innerHTML = "Votre résulté est bon, le chiffre était : " + ordinateur;
            break;
        }
    }
    if (tenta > 10){
        result.innerHTML = "eh bah alors, on pue la merde ?";
    }
}


function start(){
    if (!starded){
        starded = true;
        let input = document.querySelector(".hide");
        input.style.display = "block";

        let demar = document.getElementById("demar");
        demar.innerText = "Relancer";
    }
    else{
        ordinateur = Math.floor(Math.random() * 100); // Le bot choisi un chiffre
        result.innerHTML = "Nouveau tour..";
    }
}






