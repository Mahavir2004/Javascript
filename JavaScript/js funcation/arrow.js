const fuc1 = (x, y) => {
    return x * y;
}

let multi = fuc1(2, 3);
console.log(multi);  // Output: 6

console.log(fuc1(4, 6));  // Output: 24

for (let a = 0; a < 25; a++) {
    // Compare the result of fuc1(a, a) with 24
    if (fuc1(a, a) === 24) {
        console.log("true");
    } else {
        console.log("false");
    }
}
