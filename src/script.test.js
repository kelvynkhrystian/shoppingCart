/* eslint-disable no-undef */
const {getProducts} = require('../src/script.js');

describe('1 - Listagem de Produtos', () => {
  it.todo('A função para requisitar existe');
  it.todo('Os produtos aparecem na tela');
  it ('Os produtos aparecem na tela', () => {
    expect(typeof(getProducts).to('function'))
  });
})

describe('2 - Adicione o item ao carrinho de compras', () => {
  it.todo('O item é exibido no carrinho');
})

describe('3 - Remova o item do carrinho de compras ao clicar nele', () => {
  it.todo('O item é removido do carrinho');
})

describe('4 - Carregue o carrinho de compras ao iniciar a página', () => {
  it.todo('Ao atualizar a página os produtos continuam no carrinho');
  it.todo('Ao atualizar a página o nº de itens no carrinho está certo');
})

describe('5 - Calcule o valor total dos itens do carrinho de compras', () => {
  it.todo('O valor atual do carrinho é exibido na tela');
  it.todo('Adicionar um produto atualiza o valor');
  it.todo('Remover um produto atualiza o valor');
})

describe('6 - Limpe o carrinho de compras ao clicar em esvaziar', () => {
  it.todo('Todos os itens são removidos da barra lateral');
  it.todo('Todos os itens são removidos da localStorage');
})

describe('7 - Adicione um texto de carregando durante uma requisição à API', () => {
  it.todo('verifica se ao atualizar/iniciar a tela aparece o carregando');
})