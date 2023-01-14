// faz a requisição principal da api
const getProducts = async (computador) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`
  const result = await fetch(url);
  const data = await result.json();
  console.log(data);
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    getProducts,
  };
}