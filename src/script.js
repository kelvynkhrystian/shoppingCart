// Menu retrátil
const menu = () => {
  const btnCart = document.getElementById('rigth-header');
  const aside = document.getElementById('cart-box');
  const article = document.getElementById('produts-box');

  btnCart.addEventListener('click', () => {
    aside.classList.toggle("oit");
    article.classList.toggle("quin");
  });
}

menu();

// faz a requisição principal da api
const getProducts = async () => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=computador`
  const result = await fetch(url);
  const data = await result.json();
  ajustProducts(data);
};

getProducts();

// recebe dados da api para redirecionar a informação de cada elemento para a renderização única na página
const ajustProducts = (data) => {
  const itens = data.results;
  itens.forEach(element => {
    createProducts(element);
  });
}

// renderiza itens no carrinho puxando dados da api
const createProducts = ({thumbnail,title, price, id}) => {

  const list = document.getElementById('produts-box');
  const itemBox = document.createElement('section')
  const itemImg = document.createElement('img')
  const itemName = document.createElement('p')
  const itemPrice = document.createElement('span')
  const itemBtn = document.createElement('button')


  itemImg.src = thumbnail;
  itemImg.alt = 'produtos';
  itemName.innerText = title.substring(0,100);
  itemPrice.innerText = `R$ ${price}`;
  itemBtn.innerText = 'Add Cart';
  itemBox.classList.add('itemBox');
  itemBox.id = id;
  itemBtn.classList.add('itemBtn');
  itemBtn.onclick = addEvent;

  itemBox.appendChild(itemImg);
  itemBox.appendChild(itemName);
  itemBox.appendChild(itemPrice);
  itemBox.appendChild(itemBtn);
  list.appendChild(itemBox);
}

// contador de produtos no carrinho
const countItens = () => {
  const totalAtual = document.getElementsByClassName('itemCart').length
  const countCard = document.getElementById('countCart');
  const atual = totalAtual;
  countCard.innerHTML = `${atual}`
}

// captura o elemento clickado e redireciona para renderizar o item no carrinho
const addEvent = (ev) => {
  const element = ev.target
  const item = element.parentElement;
  getProductsById(item.id)
}

// requisição para pegar o elemento pelo id que foi passado por um evento de click do btn Add cart
const getProductsById = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`
  const result = await fetch(url);
  const data = await result.json();
  renderItemCart(data);
}

// renderiza os itens do carrinho
const renderItemCart = ({thumbnail,title, price, id}) => {

  const cart = document.getElementById('itensCartBox');
  const cartDesc = document.createElement('div')
  const cartBox = document.createElement('section')
  const cartImg = document.createElement('img')
  const cartName = document.createElement('p')
  const cartPrice = document.createElement('span')
  const cartBtn = document.createElement('button')

  cartImg.src = thumbnail;
  cartImg.alt = 'produtos';
  cartName.innerText = title.substring(0,30);
  cartBox.id = id;
  cartPrice.innerText = `R$ ${price}`;
  cartPrice.id = price;
  cartPrice.classList.add('price');
  cartBtn.innerText = 'X';
  cartBox.classList.add('itemCart');
  cartBtn.onclick = remEvent;

  cartBox.appendChild(cartImg);
  cartDesc.appendChild(cartName);
  cartDesc.appendChild(cartPrice);
  cartBox.appendChild(cartDesc);
  cartBox.appendChild(cartBtn);
  cart.appendChild(cartBox);

  countItens();
  countPrice();
  saveCart();
}

// remove itens no carrinho
const remEvent = (ev) => {
  const element = ev.target
  const item = element.parentElement;
  item.remove();
  countItens();
  countPrice();
}

// limpar carrrinho
const clearCart = () => {
  const clear = document.getElementById('esvaziar')
  clear.addEventListener('click', () => {
    const cart = document.querySelectorAll('.itemCart');
    cart.forEach((item) => item.remove());
    countItens();
    const total = document.getElementById('subtotal-value');
    total.innerText =` 0`;
    localStorage.clear();
  });
}

clearCart();

const countPrice = async () => {
  const itens = document.querySelectorAll('.price');
  const values = [];
  itens.forEach((element) => values.push(parseInt(element.id)));
  const total = values.reduce((arr,curr) => arr + curr, 0)
  const subtotal = document.getElementById('subtotal-value');
  subtotal.innerText =` ${total}`;
}

// webstorage
const saveCart = () => {
  const itensCart = document.querySelectorAll('.itemCart');

  const localS = [];

  itensCart.forEach((element) => localS.push(element.id));

  localStorage.setItem('item', JSON.stringify(localS));
}

// const loadCart = () => {

// }


// window.onload = loadCart;
