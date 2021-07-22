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

// Count the numbers of word in a string
let myString = 'I love my country';
let splitArray = myString.split(' ')
console.log(splitArray.length);

//second method
let wordCount = 0;
for (let i = 0; i < myString.length; i++) {
    const element = myString[i];
    console.log(element);
    if (element === ' ' && myString[i-1] !== ' ') { // myString[i-1] !== ' ' . this condition remove the problem when there will be more than one white space
        wordCount = wordCount + 1;
    }
}
wordCount++;
console.log(wordCount)
// Reverse a string
let splitString = myString.split('');
console.log(splitString);
let reverseString = splitString.reverse();
console.log(reverseString);
let joinReverseString = reverseString.join('');
console.log(joinReverseString)
