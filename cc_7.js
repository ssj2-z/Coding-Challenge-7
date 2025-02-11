function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`)
}

// Task 1 Test Cases 
calculateInvoice(100, .08, 5); 
// Expected output: "Total Invoice: $103"
calculateInvoice(500, .1, 20); 
// Expected output: "Total Invoice: $530"