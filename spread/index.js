// Inside of function call
// Spread out the items in this array as individual arguments
const temperatures = [45, 23, 1, 2, -4];
console.log(Math.min(...temperatures));
console.log(...temperatures);

// Spread works on all iterables
console.log(...'HELLO!');

// Create a new array
const parents = ['Swaraj', 'Usha'];
const kids = ['Rajiv', 'Shaveta', 'Vivek'];
const fullFamily = [...parents, ...kids];
console.log(fullFamily);

// Create a shallow copy of an array
const copies = [...fullFamily];
copies.push('Purnima');
console.log(...fullFamily);
console.log(...copies);

// Create a new object
const lion = {hasTail: true, legs: 4};
const eagle = {canFly: true};
const hybrid = {name: 'Gryphon', ...lion, ...eagle};
console.log(hybrid);