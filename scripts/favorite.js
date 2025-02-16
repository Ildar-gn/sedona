// Находим все кнопки "В избранное"
const favoriteButtons = document.querySelectorAll('.catalog__button.button--secondary');

// Добавляем обработчик события для каждой кнопки
favoriteButtons.forEach(button => {
  // Проверяем сохранённое состояние в localStorage
  const hotelId = button.closest('.catalog__item').querySelector('.catalog__h3').textContent;

  if (localStorage.getItem(hotelId)) {
    button.classList.add('is--active');
    button.textContent = 'В избранном';
    button.title = 'Удалить из избранного';
    button.setAttribute('aria-pressed', 'true'); // Устанавливаем aria-pressed="true"
  }

  button.addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение (если это кнопка, это не обязательно)

    // Переключаем класс is--active
    this.classList.toggle('is--active');

    // Меняем текст, title и aria-pressed в зависимости от состояния
    if (this.classList.contains('is--active')) {
      this.textContent = 'В избранном';
      this.title = 'Удалить из избранного';
      this.setAttribute('aria-pressed', 'true'); // Устанавливаем aria-pressed="true"
      localStorage.setItem(hotelId, true); // Сохраняем состояние
    } else {
      this.textContent = 'В избранное';
      this.title = 'Добавить в избранное';
      this.setAttribute('aria-pressed', 'false'); // Устанавливаем aria-pressed="false"
      localStorage.removeItem(hotelId); // Удаляем состояние
    }
  });
});
