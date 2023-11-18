const formQuantity = document.querySelectorAll('.banner__form-quantity');

if (window.screen.width <= 640) {
  formQuantity.forEach((el) => el.textContent = 'Осталось упаковок со скидкой: 48 шт')
}