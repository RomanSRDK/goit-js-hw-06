const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', (event) => {
  const {dataset, value, classList} = event.target;
  const lengthOfWord = dataset.length;
  
  if (value.length === Number(lengthOfWord)) {
    classList.remove('invalid');
    classList.add('valid');
  } else {
    classList.remove('valid');
    classList.add('invalid');
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