let arr = [3, 6, 7, 8];
console.log(arr.toString()); // Converts array to string
console.log(arr.join(" and ")); // Joins elements with " and "

console.log(arr.pop()); // Removes last element
console.log(arr); // Prints modified array

arr.push(67); // Adds 67 at the end
console.log(arr);

arr.unshift("vir"); // Adds "vir" at the beginning
console.log(arr);

arr.shift(); // Removes first element
console.log(arr);

delete arr[2]; // Deletes element at index 2 (leaves undefined)
console.log(arr);
console.log(arr.length); // Prints length (still 4 because `delete` does not shift elements)

let a1 = [1, 2, 5, 9, 5];
let a2 = [6, 7, 8, 9, 10];
let a3 = [11, 12, 1, 3, 6];

let concat = a1.concat(a2, a3); // Concatenates arrays
console.log(concat);

a1.sort(); // Sorts `a1` in ascending order
console.log(a1);

const num = [2, 3, 4, 5];
num.splice(2, 2, 777); // Removes 2 elements from index 2 and inserts 777
console.log(num);

console.log(num.slice(1, 2)); // Extracts element at index 1
