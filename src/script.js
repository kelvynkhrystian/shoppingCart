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

const getProducts = async (computador) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`
  const result = await fetch(url);
  const data = await result.json();
  ajustProducts(data);
};

getProducts('computador');

const ajustProducts = (data) => {
  const itens = data.results;
  itens.forEach(element => {
    createProducts(element);
  });
}

const createProducts = ({thumbnail,title, price, id}) => {

  const list = document.getElementById('produts-box');
  const itemBox = document.createElement('section')
  const itemImg = document.createElement('img')
  const itemName = document.createElement('p')
  const itemPrice = document.createElement('span')
  const itemBtn = document.createElement('button')

  
  itemImg.src = thumbnail;
  itemImg.alt = 'produtos';
  itemName.innerText = title;
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


const countItens = () => {
  const totalAtual = document.getElementsByClassName('itemCart').length
  const countCard = document.getElementById('countCart');
  countCard.innerHTML = `${totalAtual+1}`
  console.log(totalAtual);
}

const addEvent = (ev) => {
  const element = ev.target
  const item = element.parentElement;
  getProductsById(item.id)
  countItens();
}

// requisição para pegar o elemento pelo id que foi passado por um evento de click do btn Add cart
const getProductsById = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`
  const result = await fetch(url);
  const data = await result.json();
  renderItemCart(data)
}

const renderItemCart = ({thumbnail,title, price}) => {

  const cart = document.getElementById('itensCartBox');
  const cartDesc = document.createElement('div')
  const cartBox = document.createElement('section')
  const cartImg = document.createElement('img')
  const cartName = document.createElement('p')
  const cartPrice = document.createElement('span')
  const cartBtn = document.createElement('button')
  
  cartImg.src = thumbnail;
  cartImg.alt = 'produtos';
  cartName.innerText = title;
  cartPrice.innerText = `R$ ${price}`;
  cartBtn.innerText = 'X';
  cartBox.classList.add('itemCart');
  cartBtn.onclick = remEvent;

  cartBox.appendChild(cartImg);
  cartDesc.appendChild(cartName);
  cartDesc.appendChild(cartPrice);
  cartBox.appendChild(cartDesc);
  cartBox.appendChild(cartBtn);
  cart.appendChild(cartBox);
}

const remEvent = (ev) => {
  const element = ev.target
  const item = element.parentElement;
  item.remove();
  countItens();
}