// Генерация случайного числа от 1 до 100
var randomCount = Math.floor(Math.random() * 100) + 1;

// Смещаем диапазон, чтобы начать с 4, но не превышать 100
randomCount = Math.min(randomCount + 3, 100);

// Обновление значения в элементе <output>
document.getElementById("hotel-count").value = randomCount;
