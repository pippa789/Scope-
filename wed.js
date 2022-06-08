// let i = 10:
// if (i & 1){
//     console.log("I'm odd ...");
// } else {
//     console.log("I'm even...");
// }
//bitwise

//set time out
let a = 1 
let b = 2
let c = 3
let d = 4
console.log(a)
setTimeout(() => {
    console.log(b)
}, 2000)
setTimeout(() => {
    console.log(c)
}, 0)
console.log(c)
console.log(d)
//call backs
let myPosts = ["post1", "post2", "post3"]

const allPosts =() => {
    for(let i = 0; i < myPosts.length; i++){

    }
}

//unfinished above

const addUser = (username) => {
    return new Promise((resolve, reject))
}
