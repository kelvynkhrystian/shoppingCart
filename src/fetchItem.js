// faz a requisição principal da api
const getProducts = async (QUERY) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`
  const result = await fetch(url);
  const data = await result.json();
  return data
};

if (typeof module !== 'undefined') {
  module.exports = {
    getProducts
  };
}