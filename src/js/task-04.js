// Получаем ссылки на элементы в HTML
const decrementButtonEl = document.querySelector('button[data-action="decrement"]');
const incrementButtonEl = document.querySelector('button[data-action="increment"]');
const counterValueSpan = document.querySelector('#value');

// Инициализируем счетчик
let counterValue = 0;

// Добавляем слушатели событий на кнопки
decrementButtonEl.addEventListener('click', decrementBtn);
incrementButtonEl.addEventListener('click', incrementBtn);

// Запускаем Функции обработки клика
function decrementBtn() {
    counterValue -= 1;
    counterValueSpan.textContent = counterValue;
    return counterValue;
    }

function incrementBtn() {
    counterValue += 1;
    counterValueSpan.textContent = counterValue;
    return counterValue;
    }