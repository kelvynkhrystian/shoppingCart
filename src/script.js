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

  
  itemImg.src = thumbnail;
  itemImg.alt = 'produtos';
  itemName.innerText = title;
  itemPrice.innerText = price;
  itemBox.classList.add('itemBox');

  itemBox.appendChild(itemImg);
  itemBox.appendChild(itemName);
  itemBox.appendChild(itemPrice);
  list.appendChild(itemBox);
}

