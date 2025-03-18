---

# 🎉 Sorteio de Amigo Secreto *Alura*

Este projeto é uma prática de lógica de programação e desenvolvimento de um aplicativo para sortear amigos. Simples, divertido e com funcionalidades úteis para organizar um amigo secreto!

---

## 🚀 Funcionalidades

- **Sorteio de amigos** 🍀: Sorteia participantes de forma justa e aleatória.
- **Proteção contra sorteio próprio**: Garante que ninguém tire seu próprio nome.
- **Efeitos visuais**: Confetes animados ao realizar o sorteio.
- **Interface dinâmica**: Adição, exclusão e sorteio de participantes em tempo real.
- **Personalização**: Alteração da paleta de cores do app.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript**: Lógica do sorteio e manipulação de elementos do DOM.
- **HTML**: Estrutura do aplicativo.
- **CSS**: Estilização e design da interface.

---

## 📖 Detalhes das Funcionalidades

- **Adicionar amigo**: Insira nomes usando o campo de entrada e veja a lista ser atualizada dinamicamente.
- **Embaralhamento e sorteio**: Utiliza `Math.random()` para garantir sorteios aleatórios.
- **Efeito visual de confete**: Implementado com a biblioteca [Confetti.js](https://www.kirilv.com/canvas-confetti/).
- **Reinício fácil**: Permite reiniciar o sorteio ou limpar a lista com poucos cliques.

---

## 🕹️ Uso/Exemplos

### 1️⃣ Adicionando nomes de forma dinâmica:
```html
<input type="text" id="amigo" class="input-name" placeholder="Digite um nome" onkeypress="if(event.key === 'Enter') adicionarAmigo()">
<button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
```

### 2️⃣ Sorteio de amigos:
- O código embaralha e sorteia os nomes:
```javascript
listaDeAmigos.sort(() => Math.random() - 0.5);
let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
let nomeSorteado = listaDeAmigos[indiceAleatorio];
```

### 3️⃣ Efeito de confete:
- Exibe confetes na tela ao realizar o sorteio:
```javascript
confetti({
    particleCount: 150,
    spread: 300,
    origin: { y: 0.6 }
});
```

---

## 🔗 Links Úteis

- [Documentação do Math.random()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Guia para Efeitos de Confete com Confetti.js](https://www.kirilv.com/canvas-confetti/)

---

## ✨ Autor

**Kelvin RBS**  
(https://github.com/Kelvin-RBS)

---
