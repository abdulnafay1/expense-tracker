const expenseList = document.getElementById("expenseList");
const addExpenseButton = document.getElementById("addExpenseButton");
const addExpenseForm = document.getElementById("addExpenseForm");
const submitExpenseButton = document.getElementById("submitExpense");
const totalNum = document.getElementById("total");
var total = 0

addExpenseButton.addEventListener("click", showAddExpenseForm);
submitExpenseButton.addEventListener("click", addExpense);

function showAddExpenseForm() {
    addExpenseForm.style.display = "block";
    addExpenseButton.style.display = "none";
}

function addExpense() {
    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

    if (!expenseName || isNaN(expenseAmount)) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    total = total + expenseAmount
    totalNum.textContent = `$${total}`;
    const expenseItem = document.createElement("li");
    expenseItem.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
    expenseList.appendChild(expenseItem);

    addExpenseForm.style.display = "none";
    addExpenseButton.style.display = "block";

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}

