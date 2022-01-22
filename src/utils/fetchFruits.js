export default async function fetchFruits(props) {
  const response = await fetch('https://warm-shore-88325.herokuapp.com/fruits');
  const responseJson = await response.json();
  return responseJson;
}