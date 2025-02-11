Sorteio de Amigo Secreto *Alura*.\
Prática de lógica de programação.\
Desafio de um aplicativo de sorteia amigos.

🚀 Funcionalidades

*Sorteio de amigos.🍀

*Função para garantir que a pessoa não retire seu próprio nome como amigo secreto.

*Função otimizada de embaralhamento da lista de pessoas.


🛠 Tecnologia aplicada
Javascript, HTML, CSS...

🕹 Uso/Exemplos.\
↵ Usar "ENTER" para adicionar nomes de forma dinamica.(index.html);

                <input type="text" id="amigo" class="input-name" placeholder="Digite um nome" onkeypress="if(event.key === 'Enter') adicionarAmigo()">
                <button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
            </div>


🌪️ Embaralha amigos.\

    listaDeAmigos.sort(() => Math.random() - 0.5);
      for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaAtualizada.appendChild(itemLista);
    }

Autor
@Kelvin-RBS# 

