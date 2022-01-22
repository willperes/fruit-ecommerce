export function eventUpdateCart() {
  const event = new Event('updateCart');
  document.dispatchEvent(event);
}