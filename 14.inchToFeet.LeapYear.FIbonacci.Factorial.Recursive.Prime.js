// Inch to Feet
var inch = 24;
var feet = inch /12;
console.log(feet);

function inchToFeet(inch) {
    return inch/12;
}
var result1 = inchToFeet(24);
console.log(result1);

// Array with inch to Feet
var allInch = [124,234,345]
for (let i = 0; i < allInch.length; i++) {
    const element = allInch[i];
    const feet = element / 12;
    console.log(feet.toFixed(2));
}

// Assignment operator
const number = 12;
console.log(number == 12)
console.log(number == 13)
// Identify Leap Year

function isLeapYear(yearNumber) {
    const reminder = yearNumber % 4;
    if (reminder == 0) {
        return true;
    } else {
        return false;
    }
}

const year2000 = isLeapYear(2000);
console.log(year2000)

// Factorial
var factorial = 1;
for (let i = 1; i <= 4; i++){
    factorial = factorial * i;
    console.log(i + "=>",factorial);
}
console.log(factorial)

// Factorial with while loop
function getFactorial(num) {
    var fact = 1;
    var i = 1;
    while (i<=num) {
        fact = fact * i;
        console.log(fact, i);
        i++;
    }
    return fact;
}
let facResult1 = getFactorial(4);
console.log(facResult1);

// Factorial with recursive function
function factorialWithRecursive(n) {
    if (n == 0) {
        return 1;
    } else {
        return n*factorialWithRecursive(n-1);
    }
}
var recursiveResult = factorialWithRecursive (5);
console.log(recursiveResult);

// Fibonacci series
// 0,1,1,2,3,5,8
let fibonacci = [0,1];
for (let i = 2; i <=10; i++) {
    fibonacci[i]= fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci.join())

// fibonacci with recursive
function recursiveFibonacci(n) {
    if (n == 0) {
        return 0
    }if(n ==1 ){
        return 1
    } else {
        return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
    }
}
var resultRecursiveFibonacci = recursiveFibonacci(10);
console.log(resultRecursiveFibonacci);

// fibonacci with recursive array
function recursiveFibonacciArray(n) {
    if (n == 0) {
        return [0]
    }if(n ==1 ){
        return [0,1]
    } else {
        var fibo = recursiveFibonacciArray(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo
    }
}
var resultRecursiveFibonacciArray = recursiveFibonacciArray(10);
console.log(resultRecursiveFibonacciArray);

// Prime number checking

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return "This is not prime number";
        } else {
            return "This is a prime number";
        }
        
    }
}

var primeResult = isPrime(13);
console.log(primeResult)

// Largest Element Of an Array
let myArray = [12,34,92,34];
let largestFromMyArray = myArray[0];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    if (largestFromMyArray < element) {
        largestFromMyArray = element;
    } 
}
console.log(largestFromMyArray);

// Sum of all numbers in an array
function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
        sum = sum + element;
    }
    return sum;
}
var arraySumResult = sumOfArray([12,34,45]);
console.log(arraySumResult);

// Remove duplicate item from an array
let duplicateArray = [12,34,45,34,23,67];
let uniqueItem= [];
for (let i = 0; i < duplicateArray.length; i++) {
    const element = duplicateArray[i];
    if (uniqueItem.indexOf(element) == -1) {
        uniqueItem.push(element);
    }
}
console.log(uniqueItem);

// Count the numbers in a string
let myString = 'I love my country';
let splitArray = myString.split(' ')
console.log(splitArray.length);

// Reverse a string
let splitString = myString.split('');
console.log(splitString);
let reverseString = splitString.reverse();
console.log(reverseString);
let joinReverseString = reverseString.join('');
console.log(joinReverseString)
