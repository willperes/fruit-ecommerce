import { eventUpdateCart } from './eventUpdateCart.js';

async function addToCart(product) {
  let cartProducts = [];

  if (localStorage.hasOwnProperty('cartProducts')) {
    cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
  }

  // Receber objeto do produto contendo as informações de valor e imagem.
  const response = await fetch(`https://warm-shore-88325.herokuapp.com/fruit/${product.id}`);
  const fruitInformation = await response.json();

  let fruitCost = fruitInformation.cost;
  let fruitImage = fruitInformation.img;

  for (let i = 0; i < cartProducts.length; i++) {
    let id = product.id;
    if (cartProducts[i].id === id) {
      cartProducts[i].qty = cartProducts[i].qty + 1;
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      eventUpdateCart();
      return;
    }
  }

  cartProducts.push({
    name: product.name,
    id: product.id,
    cost: fruitCost,
    img: fruitImage,
    qty: 1
  })
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  eventUpdateCart();
}

export default addToCart;