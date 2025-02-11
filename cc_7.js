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

