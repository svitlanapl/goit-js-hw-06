function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeButtonEl: document.querySelector('button.change-color'),
  bodyEl: document.querySelector('body'),
  colorValueEl: document.querySelector('span.color'),
}

refs.changeButtonEl.addEventListener('click', event => {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.colorValueEl.textContent = color;
})
