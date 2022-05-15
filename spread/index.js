/**
 * Unpack an array into all its elements.
 * It doesn't create new variables.
 * As a result we can only use it in places.
 * We would otherwise write values separated by a comma.
 *
 * Works on all iterables plus objects.
 * Used only in building arrays or passing values into a function.
 */

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(...newArr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  }
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(...newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array
const menu = [...restaurant.startMenu, ...restaurant.mainMenu];

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

const ingredients = ['mushrooms', 'cheese', 'asparagus'];
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  ...restaurant,
  founder: 'Guiseppe',
  name: 'New Classico Italiano'
};

console.log(newRestaurant);

// shallow copy of an object
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);






