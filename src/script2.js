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

module.exports = {menu}