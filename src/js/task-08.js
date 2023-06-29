const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', event => {
  event.preventDefault();

  const {email, password} = event.currentTarget.elements;
  
  if (email.value === '' || password.value === '') {
    alert('Please fill in all fields.');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    }
      console.log(formData);
      loginFormEl.reset();
  }
})