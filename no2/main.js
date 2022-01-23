const available = document.getElementById("amount_available");
const amount = document.getElementById("amount");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

let wallet = 0;
income.addEventListener("click", function () {
  available.textContent = wallet += parseInt(amount.value);
});
expense.addEventListener("click", function () {
  available.textContent = wallet -= parseInt(amount.value);
});
