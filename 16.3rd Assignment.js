// Km to m
function kmToMeter(km) {
    let meters = km * 1000;
    return meters;
}
let meter = kmToMeter(4);
console.log(meter)

// Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    let totalBudget = watch * 50 + phone * 100 + laptop * 500;
    return totalBudget;
}
let myBudget = budgetCalculator(1, 1, 1);
console.log(myBudget);