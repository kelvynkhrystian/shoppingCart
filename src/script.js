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
  console.log(data);
};

getProducts('computador');