---

# Sorteio de Amigo Secreto *Alura*

Prática de lógica de programação e desenvolvimento de um aplicativo para sorteio de amigos.

---

## 🚀 Funcionalidades

- **Sorteio de amigos** 🍀
- Função que garante que uma pessoa não tire seu próprio nome como amigo secreto.
- Função otimizada de embaralhamento da lista de participantes.
- Alteração da paleta de cores do app.
- Efeito de confete ao realizar o sorteio.

---

## 🛠️ Tecnologias Utilizadas

- **Javascript**
- **HTML**
- **CSS**

---

## 🕹️ Uso/Exemplos

Adicione nomes de forma dinâmica usando o botão ou pressionando "Enter":

```html
<input type="text" id="amigo" class="input-name" placeholder="Digite um nome" onkeypress="if(event.key === 'Enter') adicionarAmigo()">
<button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
```

---

## 🌪️ Sorteio e Embaralhamento

Embaralha e exibe os amigos sorteados com o seguinte código:

```javascript
listaDeAmigos.sort(() => Math.random() - 0.5);
for (let i = 0; i < listaDeAmigos.length; i++) {
    let itemLista = document.createElement("li");
    itemLista.innerHTML = listaDeAmigos[i];
    listaAtualizada.appendChild(itemLista);
}
```

---

## ✨ Autor

**Kelvin RBS**

---
