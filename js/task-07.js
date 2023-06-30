const fontSizeControlEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', ({target}) => {
  const fontSize = target.value + 'px';
  textSpanEl.style.fontSize = fontSize;
});