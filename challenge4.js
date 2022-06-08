const multiply = (a,b) => {
    return a*b
}
const add = (a, b) => {
    return a + b
}
const divide = (a, b) => {
    return a/b
}
const subtract = (a, b) => {
    return a-b
}
const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1) 
        }
}
console.log(doMath(2)(3))
let myFirstFunction = doMath(2)
console.log(myFirstFunction(3, add))
let myReturnedFunction = doMath(2)(3, add)
console.log(myReturnedFunction)
