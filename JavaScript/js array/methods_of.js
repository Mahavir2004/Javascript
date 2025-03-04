let arr = [3,6,7,8];
console.log(arr.toString())
console.log(arr.join(" and " ))


console.log(arr.pop());
console.log(arr);

let arr = [3,6,7,8];
console.log(arr.toString())  // It is used to convert array into string
console.log(arr.join(" and " )) // It is used to replace comma with " and " or any other string



console.log(arr.pop()); // It is used to remove last element from array
console.log(arr); // It is used to print array after removing last element
arr.push(67) // It is used to add element at the end of array
console.log(arr); // It is used to print array after adding element at the end
arr.unshift("vir"); // It is used to add element at the beginning of array
console.log(arr); // It is used to print array after adding element at the beginning
arr.shift() // It is used to remove first element from array
console.log(arr); // It is used to print array after removing first element
delete arr[2];
console.log(arr); // It is used to print array after removing element at index 2
console.log(arr.length)

let a1 = [1,2,5,9,5];
let a2 = [6,7,8,9,10];
let a3 = [11,12,1,3,6];
let concat = a1.concat(a2,a3);
console.log(concat); // It is used to concatenate two or more arrays
a1.sort() // It is used to sort array in ascending order
console.log(a1); 
const num = [2,3,4,5,];
num.splice(2,3,777); // It will remove the first three elements from the array
console.log(num);
console.log(num.slice(1,2)); // It will return the second element of the array
const num = [2,3,4,5,];
num.splice(2,3,777); // It will remove the first three elements from the array
console.log(num);
console.log(num.slice(1,2)); // It will return the second element of the array
