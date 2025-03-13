let a = [1,2,3,4]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
    
}
a.forEach((value,i,arr)=> {
    console.log(value,i,arr)
});
let object = {
    a : 1,
    b : 2,
    c : 3,

}
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key,element);
        
    }
}
for (const value of Object.values(object)) {
    console.log(value);
}
