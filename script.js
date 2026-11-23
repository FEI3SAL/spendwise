// ==================================
// SPENDWISE - JAVASCRIPT FOUNDATION
// ==================================

// 1. Variables and Application Data

const currency = "KSh";

let monthlyBudget = 0;

let totalExpenses = 0;

const expenses = [];


// 2. Function to collect valid numerical input

function getPositiveNumber(message) {

    let value;

    while (true) {

        const input = prompt(message);

        if (input === null) {
            return null;
        }

        value = Number(input);

        if (input.trim() !== "" &&
            Number.isFinite(value) &&
            value > 0) {

            return value;

        }

        alert("Please enter a valid positive number.");
    }
}


// 3. Collect Monthly Budget

function collectBudget() {

    monthlyBudget = getPositiveNumber(
        "Enter your monthly budget in KSh:"
    );

    if (monthlyBudget === null) {
        return false;
    }

    return true;
}


// 4. Collect Expense Information

function collectExpenses() {

    const expenseCount = getPositiveNumber(
        "How many expenses do you want to enter?"
    );

    if (expenseCount === null) {
        return false;
    }

    if (!Number.isInteger(expenseCount)) {

        alert("Please enter a whole number.");

        return collectExpenses();
    }

    for (let i = 0; i < expenseCount; i++) {

        const name = prompt(
            `Enter the name of expense ${i + 1}:`
        );

        if (name === null) {
            return false;
        }

        const amount = getPositiveNumber(
            `Enter the amount for ${name}:`
        );

        if (amount === null) {
            return false;
        }

        expenses.push({
            name: name,
            amount: amount
        });

    }

    return true;
}


// 5. Calculate Total Expenses

function calculateTotalExpenses() {

    let total = 0;

    for (const expense of expenses) {

        total += expense.amount;

    }

    return total;
}


// 6. Calculate Remaining Balance

function calculateRemainingBalance(budget, spending) {

    return budget - spending;

}


// 7. Display Budget Results

function displayResults() {

    totalExpenses = calculateTotalExpenses();

    const remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    console.log("===== SPENDWISE BUDGET REPORT =====");

    console.log("Monthly Budget:", currency, monthlyBudget);

    console.log("Expense Details:");

    console.table(expenses);

    console.log("Total Expenses:", currency, totalExpenses);

    console.log("Remaining Balance:", currency, remainingBalance);

    if (remainingBalance < 0) {

        console.log("Warning: You have exceeded your budget!");

    } else {

        console.log("Status: You are within your budget.");

    }

    console.log("==================================");

}


// 8. Run SpendWise Application

function runSpendWise() {

    const budgetCollected = collectBudget();

    if (!budgetCollected) {
        return;
    }

    const expensesCollected = collectExpenses();

    if (!expensesCollected) {
        return;
    }

    displayResults();

}


// Start Application

runSpendWise();