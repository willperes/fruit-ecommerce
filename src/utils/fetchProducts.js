export default async function fetchProducts() {
  const response = await fetch('https://calm-escarpment-77918.herokuapp.com/https://www.fruityvice.com/api/fruit/all');
  const responseJson = await response.json();
  return responseJson;
}