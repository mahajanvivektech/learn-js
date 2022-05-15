/**
 * Destructuring is a way of unpacking values from an array or object
 * into separate variables
 */
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]
  },
};

const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z)

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// swapping values
[secondary, main] = [main, secondary];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested deconstructing
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);