export default function cartProduct() {
  let cartProduct = [];
  
  if (localStorage.hasOwnProperty('cartProducts')) {
    cartProduct = JSON.parse(localStorage.getItem('cartProducts'));
  }

  return cartProduct;
}