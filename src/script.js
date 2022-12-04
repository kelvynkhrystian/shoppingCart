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
  itens.forEach(element => createProducts(element));
}

const createProducts = ({thumbnail,title, price}) => {

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
  itemBtn.classList.add('itemBtn');
  

  itemBox.appendChild(itemImg);
  itemBox.appendChild(itemName);
  itemBox.appendChild(itemPrice);
  itemBox.appendChild(itemBtn);
  list.appendChild(itemBox);
}


const countItens = async () => {
  // const numbers = [1, 32, 44, 2, 3];
  // const sumNumbers =  (acc, curr) => acc + curr;
  // const totalSum = numbers.reduce(sumNumbers, 0);

  const totalAtual = document.getElementsByClassName('itemCart').length
  
  const countCard = document.getElementById('countCart');
  countCard.innerHTML = `${totalAtual}`
  
  // return totalSum;
}

countItens();