function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	inputNumEl: document.querySelector('#controls>input'),
	btnCreateEl: document.querySelector('button[data-create]'),
	btnDestroyEl: document.querySelector('button[data-destroy]'),
	boxesEl: document.querySelector('#boxes'),
}

const createBoxes = amount => {
	const elementsToAdd = [];
	for (let i = 0; i < amount; i+=1) {
		const div = document.createElement('div');
		div.style.height = `${30 + 10 * i}px`;
		div.style.width = `${30 + 10 * i}px`;
		div.style.background = getRandomHexColor();
		elementsToAdd.push(div);
	}
	return elementsToAdd;
}

const destroyBoxes = () => {
	refs.boxesEl.innerHTML = '';
}

refs.btnCreateEl.addEventListener('click', () => {
	let boxesToAdd = createBoxes(refs.inputNumEl.value);
	refs.boxesEl.append(...boxesToAdd);
})

console.log(refs.inputNumEl.value);

refs.btnDestroyEl.addEventListener('click', destroyBoxes);
