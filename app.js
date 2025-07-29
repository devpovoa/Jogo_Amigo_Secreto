const listaAmigos = [];
const listaAmigosElement = document.getElementById("listaAmigos");
const resultadoElement = document.getElementById("resultado");

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        input.value = "";
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista() {
    listaAmigosElement.innerHTML = "";
    listaAmigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const nomeSorteado = listaAmigos.splice(indiceSorteado, 1)[0];

    resultadoElement.innerHTML = `<li>O amigo secreto sorteado é: <strong>${nomeSorteado}</strong></li>`;
    atualizarLista();
}

function limparLista() {
    listaAmigos.length = 0;
    atualizarLista();
    resultadoElement.innerHTML = "";
}

document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarAmigo();
    }
});
