function biggestNumber(myArray) {
    var larger = myArray[0];
    console.log(larger);
    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];
        if (element > larger) {
            larger = element;
        }
    }
    return larger;
}



var result1 = biggestNumber([1,2,3,4,5,6,7]);
console.log(result1);

var result2 = biggestNumber([23,45,23,56,67]);
console.log(result2)