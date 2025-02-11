alert("VAMOS SORTEAR!!!");

let nome = prompt('Qual seu nome?');
let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome");
    } else {
        listaDeAmigos.push(nomeAmigo);
        document.getElementById("amigo").value = "";
        atualizarLista();
    }
}

function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    
    // Embaralhar a lista de amigos(se não vai ser sempre primeiro nome)
    listaDeAmigos.sort(() => Math.random() - 0.5);

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Por favor, insira um nome.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceAleatorio];
    if (nomeSorteado === nome) {
        alert("Você foi sorteado, mas não pode!\nTente novamente!!!");
        location.reload();
        return;
    }

    document.getElementById("resultado").innerHTML = `O nome sorteado é: ${nomeSorteado}`;

    // Desativa o botão de sortear amigo após o sorteio(ALTEREI PARA REINICIAR)
    //document.getElementById("botaoSortear").disabled = true;

    // Pergunta se o usuário deseja reiniciar
    setTimeout(function() {
        if (confirm("Deseja reiniciar o sorteio?")) {
            reiniciarSorteio();
        }
    }, 1000);
}

function reiniciarSorteio() {
    listaDeAmigos = [];
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
    document.getElementById("botaoSortear").disabled = false;
}
