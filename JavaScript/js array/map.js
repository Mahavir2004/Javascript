let arr = [1,4,13,7,11]
let newarry = []
// newarry.push(arr)

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarry.push(element**2)
    
// }
// console.log(newarry)

console.log(arr.map(x=>x**2))

const greaterthan7 = (e)=>{
    if (e>7) {
        return true
    }
    return false
}
 console.log(arr.filter(greaterthan7))
 let arr2 = [1,2,3,4,5]
const add = (a, b)=>{
    return a+b
} 
console.log(arr2.reduce(add))
let array2 = Array.from("vir");
console.log(array2);


