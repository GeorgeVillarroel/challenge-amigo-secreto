// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function agregarAmigo() {

    let nombreInput = document.querySelector(".input-name");

    if (nombreInput.value.length > 0) {
        
            nombreAmigos.push(nombreInput.value);
            nombreInput.value = "";

            actualizarLista();

    } else {
        alert("Por favor, inserte un nombre.");
    }

}

function actualizarLista() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
    let nuevoTextoHTML = "";

    for(let i = 0; i < nombreAmigos.length ; i++) {
        nuevoTextoHTML = nuevoTextoHTML + `<li>${nombreAmigos[i]}</li>`;
    }

    listaAmigos.innerHTML = nuevoTextoHTML;
}

/* function sortearAmigo(); */