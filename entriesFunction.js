// In this part we provide an Object and it returns Array
/*const object1 = {
    a: 'teststring',
    b: 563
}

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`)
}*/


/*
const obj = { foo: 'bar', baz: 500 }
console.log(Object.entries(obj));
*/

// Array like object
/*const obj = {
    0: 'a',
    1: 'b',
    2: 'c'
}

console.log(Object.entries(obj))
*/

// Array like object with random key ordering
/*const anObj = {
    100: 'a',
    2: 'b',
    7: 'c'
}

console.log(Object.entries(anObj))
*/

// getFoo is property which isn't enumerable
/*const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); 
*/

// non-object argument will be coerced to an object
//console.log(Object.entries('foo'))

// returns an empty array for any primitive type exept for strings
//console.log(Object.entries(100))

// Iterate through key-value gracefully
/*const obj = {
    a: 5,
    b: 7,
    c: 9
};


for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} ${value}`)
}

// Or using array extras
Object.entries(obj).forEach( ([key, value]) => {
    console.log(`${key} ${value}`)
})*/

// Convert Object to Map
/*const obj = {
    foo: 'bar',
    baz: 562
}

const map = new Map(Object.entries(obj));
console.log(map)*/

// Iterating throuugh an Object
const obj = {
    foo: 'bar',
    baz: 863
}

Object.entries(obj).forEach(
    ([key, value]) => {
        console.log(`${key}: ${value}`)
    }
)