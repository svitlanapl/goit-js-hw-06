const inputEl = document.querySelector('#validation-input');
// console.dir(inputEl);

const textLength = inputEl.getAttribute('data-length');
// console.log(textLength);

inputEl.addEventListener('blur', handlerBlur);

function handlerBlur() {
	if(inputEl.value.length == textLength) {
		inputEl.classList.remove('invalid');
	    inputEl.classList.add('valid');
	} else {inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
	}	
}

