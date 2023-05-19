const counter = document.getElementById("counter");
const increaseButton = getElementById("increaseButton");
const decreaseButton = getElementById("decreaseButton");

increaseButton.addEventListener("click", () => {
  counter.innerText++;
});
decreaseButton.addEventListener("click", () => {
  counter.innerText--;
});
