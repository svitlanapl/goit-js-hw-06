const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul');

const ingredientsEl = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');

  return liEl;
})

ulEl.append(...ingredientsEl);
// console.log(ulEl);

// ----------------------old school----------------------
// const ulEl = document.querySelector('ul');

// const ingredientsEl = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredients[i];
//   liEl.classList.add('item');

//   ingredientsEl.push(liEl);
// }
// ulEl.append(...ingredientsEl);
// console.log(ulEl);

