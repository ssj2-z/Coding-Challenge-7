function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`)
}

// Task 1 Test Cases 
calculateInvoice(100, .08, 5); 
// Expected output: "Total Invoice: $103"
calculateInvoice(500, .1, 20); 
// Expected output: "Total Invoice: $530"

// Task 2 Calculate Employee hours
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52); 
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`)
}

// Test Cases 
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"

// Task 3 Arrow Function
const calculateLoyalityDiscount = (amount, years)=> {
    let discountRate; if (years >= 5) {
        discountRate = .15;
    } else if (years >= 3) {
        discountRate = .10;
    } else {
        discountRate = .05;
    }
    let discountedPrice = amount * (1 - discountRate);
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
}

// Test Cases 
calculateLoyalityDiscount(100, 6); 
// Expected output: "Discounted Price: $85"
calculateLoyalityDiscount(200, 2); 
// Expected output: "Discounted Price: $190"

// Task 4 Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost;
    let perLbCost;
    if (location === "USA") {
        baseCost = 5;
        perLbCost = .5;
    } else if (location === "Canada") { 
        baseCost = 10;
        perLbCost = .7;
    } else {
        console.log("Location not supported");
        return;
    }

    let shippingCost = baseCost + (perLbCost * weight);
    if (expedited) {
        shippingCost += 10;
    }

    console.log(`Shipping Cost: $${shippingCost.toFixed(2)}`);
}

// Test Cases
calculateShippingCost(10, "USA", true);
// Expected output: "shipping Cost: $20"
calculateShippingCost(5, "Canada", false);
// Expected output: "shipping Cost: $13.5"

// Task 5 Returning Values
function calculateLoanINterest(principal, rate, years) {
    let interest = principal * rate * years;
    return interest;
}

// Test Cases
console.log(`Total Interest:
$${calculateLoanInterest(1000, .05, 3).toFixed(2)}`);
// Expected output: "Total Interest: $150
console.log(`Total Interest: 
$${calculateLoanInterest(5000, .07, 5).toFixed(2)}`);
// Expected output: "Total Interest: $1750"

// Task 6 Higher-Order Functions
// Declare an array with at least five amounts
let transactions = [500, 1200, 3000, 800, 2200];

// Higher-order function to filter high-value transactions
const filterHighValueTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
}

// Test Data
let highValueTransactions = 
filterHighValueTransactions(transactions, amount => amount > 1000);
console.log(highValueTransactions); 
// Expected output: [1200, 3000, 2200]

// Task 7 closures
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        console.log(`Current Balance: -$${balance}`);
    }
}

// Test Data
let budget = createBudgetTracker(); budget(300);
// Expected output: "Current Balance: -$300" budget(200);
// Expected output: "Current Balance: -$500"

// Task 8 Recursion in JavaScript
function calculateGrowth(years, revenue) {
    if (years === 0 || years > 10) {
        return revenue;
    }
    return calculateGrowth(years - 1, revune * 1.05);
}

// Test Data
console.log(`Projected Revune: $${calculateGrowth(8, 1000).toFixed(2)}`);
// Expected output: "Projected Revenue: $1102.5"
console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`);
// Expected output: "Projected Revenue: $6381.41"
