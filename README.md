# Aplicação Amigo Secreto

Este projeto é uma aplicação web que permite aos usuários adicionar nomes de amigos a uma lista e sortear um "amigo secreto" aleatoriamente.

## Funcionalidades

- Adicionar nomes de amigos à lista.
- Visualizar a lista de amigos adicionados.
- Sortear aleatoriamente um amigo da lista.
- Validar a entrada, exibindo alerta se o campo estiver vazio.

## Aplicação prática do conhecimento

- Declarei uma variável do tipo **array** (`let amigos = []`) que armazena os nomes dos amigos inseridos dinamicamente.
- Criei a função **`adicionarAmigo()`** que:
  - Captura o valor digitado no campo de entrada (`input.value`).
  - Valida se o campo não está vazio, exibindo um alerta caso esteja.
  - Adiciona o nome válido ao **array amigos** usando o método `.push()`.
  - Limpa o campo de entrada após a adição.
  - Chama a função `atualizarLista()` para atualizar a lista na tela.
- Criei a função **`atualizarLista()`**, que percorre o **array amigos** e adiciona cada nome como um elemento `<li>` dentro de uma lista HTML (`ul`):
  - Limpa a lista antes de adicionar novos elementos com `innerHTML = ""`.
  - Cria dinamicamente `<li>` para cada amigo e insere na lista.
- Criei a função **`sortearAmigo()`** que:
  - Verifica se existem nomes no array antes de realizar o sorteio.
  - Gera um índice aleatório com `Math.random()` e `Math.floor()` para selecionar um amigo da lista.
  - Exibe o nome sorteado na tela atualizando o conteúdo do elemento HTML (`resultado.innerHTML`).

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- VSCode como IDE de desenvolvimento

## Demonstração

Verifique a página desenvolvida e publicada: [Amigo Secreto](https://jvbcarv.github.io/Challenge_Jogo_Amigo_Secreto_Alura/)<br><br>
<img width="862" height="854" alt="image" src="https://github.com/user-attachments/assets/797926c1-435c-4d22-b95f-b8076d046153" />

