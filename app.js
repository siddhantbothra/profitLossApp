const ip = document.querySelector("#intialPrice");
const quantity = document.querySelector("#quantity");
const cp = document.querySelector("#currentPrice");
const btn = document.querySelector("#submitbtn");
const result = document.querySelector("#result");

function stockValue() {
  let sum =
    Number(cp.value) * Number(quantity.value) -
    Number(ip.value) * Number(quantity.value);
  let percentage = (sum / (Number(ip.value) * Number(quantity.value))) * 100;
  if (sum > 0) {
    result.style.color = "green";
    result.textContent = `Your value is ${sum} and overall percentage ${percentage}%`;
  } else if (sum < 0) {
    result.style.color = "red";
    result.textContent = `Your value is ${sum} and overall percentage ${percentage}%`;
  } else {
    result.textContent = `No pain no gain.No gain no pain`;
  }
}

function stockResult() {
  stockValue();
}

btn.addEventListener("click", stockResult);
