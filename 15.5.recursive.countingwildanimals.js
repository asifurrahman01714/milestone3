// Find factorial with recursive
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
let factorialResult = factorial(5);
console.log(factorialResult);

// Find factorial with recursive
function factRecursive(n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return 1;
    } else {
        console.log(n, n-1)
        return n * factRecursive(n - 1);
    }
}
let factorialWithRecursive = factRecursive(5);
console.log(factorialWithRecursive);

// Counting wild animals in a jungle according to depth;
// for 10km, wild animals are 50
// for 20km, wild animals are 100
// for 20km<, wild animals are 300
function wildAnimalCount(depth) {
    let animals = 0;
    if (depth <=10) {
        animals = depth * 50;
    } else if(depth <= 20){
        let firstPart = 10 * 50;
        let remainingPart = depth - 10;
        let secondPart = remainingPart * 100;
        animals = firstPart + secondPart;
    } else{
        let firstPart = 10 * 50;
        let secondPart = 10 * 100;
        let remainingPart = depth - 20;
        let thirdPart = remainingPart * 300;
        animals = firstPart + secondPart + thirdPart;
    }
    return animals;
}

let allAnimals = wildAnimalCount(21);
console.log(allAnimals);