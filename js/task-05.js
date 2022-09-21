const inputEl = document.querySelector('#name-input');
// console.log(inputEl);
const spanEl = document.querySelector('#name-output');
// console.log(spanEl);

inputEl.addEventListener('input', event => {
	const valueInput = event.currentTarget.value.trim();

	spanEl.textContent = valueInput ? valueInput : 'Anonymous';

	// spanEl.textContent = valueInput || 'Anonymous';
})


