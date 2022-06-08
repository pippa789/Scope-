// let whichGreeting = (timeOfDay) => {
//     console.log(`Good ${timeOfDay}`)
// }
// let greet = (time, fn) => {
//     if(time < 12){
//         fn("Morning")
//     } else if (time > 12 && time < 18){
//         fn("Afternoon")
//     } else {
//         fn("Evening")
//     }

// }
// greet(whichGreeting)

// let myFunction = (2) => {
//     return() => {
//         console.log("hello")
//     }
// }
// console.log(myFunction())
// //the empty brackets are the anonymous function.
let multiply = (num1) => {
    return(num2) => {
        return num1 * num2
    }
}
let myReturnedFunction = multiply(2)
myReturnedFunction(4)
console.log(myReturnedFunction)