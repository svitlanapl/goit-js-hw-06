
const inputRangeEl = document.querySelector("#font-size-control");
// console.log(inputRangeEl);
const inputTextEl = document.querySelector("#text");
// console.log(inputTextEl);

const handleInput = () => {
  inputTextEl.style.fontSize = `${inputRangeEl.value}px`;
};
// console.log(handleInput);
inputRangeEl.addEventListener("input", handleInput);






