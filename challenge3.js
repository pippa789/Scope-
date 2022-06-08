// Challenge 3: 
// The array method map is an 
// example of a higher order function.
// Declare an array with five 
// numbers, then use map to iterate 
// through the array and multiply 
// each array item by 3

myArray = [
    1,
    2,
    3,
    4,
    5
];
const map1 = myArray.map(fn => fn * 3);
console.log(map1);