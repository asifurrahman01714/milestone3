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
        return n * factRecursive(n - 1);
    }
}
let factorialWithRecursive = factRecursive(5);
console.log(factorialWithRecursive);