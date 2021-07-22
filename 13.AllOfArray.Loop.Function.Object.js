// Javascript Array  

var customers = ['asif', 'arif', 'sajid', 'rakib'];
console.log(customers.length); //the length for the initial time is

customers.push('safin'); // adding 'safin' at the end of the array
console.log(customers);// Now the array is look like as
console.log(customers.length); //the length after adding 'safin' is

customers.pop(); // removing the last element from the array
console.log(customers); // Now the array is look like as
console.log(customers.length) //the length after removing 'safin' is

customers.unshift('Abu Rayhan'); // adding 'Abu rayhan' at the beginning of the array
console.log(customers); // Now the array is look like as
console.log(customers.length) //the length after adding 'Abu rayhan' in the beginning

customers.shift(); // removing the first element from the array
console.log(customers); // Now the array is look like as
console.log(customers.length) //the length after removing 'Abu rayhan' from the beginning

customers.splice(2 , 1,"motiur"); // inserting item in specific index
console.log(customers);

customers.splice(2,1); // removing specific item
console.log(customers);

// removing an specific item from array
var numbers = [1,2,3,4,3,5];
var values = 3;
numbers = numbers.filter(function(item){
    return values != item;
})
console.log(numbers);

// removing specific element in another way
var indexOfSpecificElement = numbers.indexOf(5);
console.log(indexOfSpecificElement);
if (indexOfSpecificElement > -1) {
    numbers.splice(indexOfSpecificElement,1)
}
console.log(numbers);

//While loop
var num = 10;
while (num <=15) {
    console.log(num);
    num++;
}

// For loop
for (let i = 0; i < 15; i++) {
    console.log(i)
}

var rollArray = [1,2,3,4,5,6,7,8]
for (let i = 0; i < rollArray.length; i++) {
    const element = rollArray[i];
    console.log(element);
}

// switch 
switch (10) {
    case 11:
        console.log('11')
        break;

    case 12:
        console.log('12')
        break;
    
    case 10:
        console.log('10')
        break;
        
    default:
        break;
}
// If else
var num1 = 10;
if (num1 === 12) {
    console.log('12');
} else if(num1 === 13) {
    console.log(13)
}else{
    console.log('No match')
}


// Function
function doubleIt(num) {
    return num * 2;
}
var first = doubleIt(5);
var second = doubleIt(10);
var total = first + second;
console.log(first + ",", second + ",", total);

// Object
var st1 = {
    id: 177021062,
    phone: 01714-920679
}

var st1Id= "id";
var st2 = {
    id: 17702052,
    phone: 01777-777777
}

// calling one javascript property in these system.
console.log(st1.id);
console.log(st1["id"]);
console.log(st1[st1Id]);

// Adding another property in st1 and st2
st1.name = "Asif Ur Rahman";
st2["name"] = "Omar Faruk Azad";

// After updating property
console.log(st1);
console.log(st2);

