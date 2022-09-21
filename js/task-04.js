let counterValue = 0;

const refs = {
	btnDecrEl: document.querySelector('button[data-action="decrement"]'),
	btnIncrEl: document.querySelector('button[data-action="increment"]'),
	valueEl: document.querySelector('#value'),
}

refs.btnDecrEl.addEventListener('click', decrClick);
function decrClick(event){
	refs.valueEl.textContent =counterValue -=1;
}

refs.btnIncrEl.addEventListener('click', incrClick);
function incrClick(event){
	refs.valueEl.textContent =counterValue +=1;
}
