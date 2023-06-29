const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', () => {
  const lengthOfWord = validationInputEl.getAttribute('data-length');
  
  if (validationInputEl.value.length === Number(lengthOfWord)) {
    validationInputEl.classList.remove('invalid');
    validationInputEl.classList.add('valid');
  } else {
    validationInputEl.classList.remove('valid');
    validationInputEl.classList.add('invalid');
  }
});


// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }