// Rest operator
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5));

// Spread operator flatten or spread variables out
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
console.log(['blue', ...defaultColors, ...userFavoriteColors]);

function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }

  return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'));

const mathLibrary = {
  // rest
  calculateProduct(...rest) {
    // spread
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

// Create shallow copy of an array
const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy);

// Spread operator works all iterables
const name = 'VIVEK';
console.log(...name);

// Spread operator also works on objects
// Can do shallow copies of arrays using spread operator
const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const GoogleCopy = {
  ...Google
}
console.log(GoogleCopy);

const GoogleWithMoreInfo = {
  ...Google,
  founder: 'Larry Page'
}
console.log(GoogleWithMoreInfo);
