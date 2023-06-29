const fontSizeControlEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', () => {
  const fontSize = fontSizeControlEl.value + 'px';
  textSpanEl.style.fontSize = fontSize;
});