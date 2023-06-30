// Получаем ссылки на элементы в HTML
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// // Добавляем слушатели событий
// nameInput.addEventListener('input', onInput);

// function onInput () {
// const inputValue = nameInput.value.trim();
// nameOutput.textContent = inputValue ? inputValue : 'Anonymous';

// return inputValue;
// }


nameInput.addEventListener('input', ({target}) => {
    const inputValue = target.value.trim();
    nameOutput.textContent = inputValue ? inputValue : 'Anonymous';

    return inputValue;
});