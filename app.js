// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo"); // pega o valor do input
    const nome = input.value.trim(); // remove espaços em branco no início/fim

    // Validação de entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista na tela
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa a lista atual

    // Percorre o array e cria elementos <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Verifica se há amigos para sortear
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Mostra o resultado na tela
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}