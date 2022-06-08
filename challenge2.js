//Challenge 2: 
// Write a simple function which has two parameters and 
// returns their sum (basically takes in two numbers, adds 
// them together and returns the result) 
// Then create a higher order function, which takes three 
// parameters (a function and two numbers). Use this 
// higher order function to run your simple function 5 
// times, each time adding the result to a total variable. 
// Then return the total variable. 
// Show the result in the console. Hint: similar-ish to challenge 1

const addNum = (one, two) => {
    return(one + two)
}
console.log(addNum(2, 8));
let totalNumber = 0;
const helloCodeNation5Times = (fn, one, two) => {
    for(i=0; i<5; i++){
        totalNumber += fn(one, two);
        console.log(totalNumber);
    }
}
helloCodeNation5Times(addNum, 2, 8);