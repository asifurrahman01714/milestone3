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

// Hotel Cost
// 1-10 Days = 100tk ; 11-20 Days = 80tk ; 21<= 50tk
function HotelCost(Days) {
    let totalCost = 0;
    if (Days < 11) {
        totalCost = Days * 100;
    } else if(Days < 20) {  
        let firstPart = 10 * 100;
        let remainingPart = Days - 10;
        let secondPart = remainingPart * 80;
        totalCost = firstPart + secondPart;
    } else{
        let firstPart = 10 * 100;
        let secondPart = 10 * 80;
        let remainingPart = Days - 20;
        let thirdPart = remainingPart * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
    return totalCost;
}
let MyHotelCost = HotelCost(21);
console.log(MyHotelCost);

// MegaFriend
function MegaFriend(Array) {
    let biggestName = Array[0];
    console.log(biggestName);
    for (let i = 0; i < Array.length; i++) {
        const element = Array[i];
        console.log(element);
        if (biggestName.length < element.length) {
            biggestName = element;
        }
    }
    return biggestName;
}
let friendsArray = MegaFriend(['Asif', 'Sakibur', 'Asif Ur Rahman']);
console.log(friendsArray);