const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function ({starterIndex = 1, time = '22.10', address}) {
    console.log(starterIndex, time, address);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0,
      close: 24
    },
  },
};

const {restaurantName, openingHours, categories} = restaurant;
console.log(restaurantName, openingHours, categories);

// Alias
const {
  restaurantName: title,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(title, hours, tags);

// Default Values
const {menu = [], startMenu = []} = restaurant;
console.log(menu, startMenu);

// Mutating variables
let a = 10;
let b = 20;

const obj = {a: 30, b: 40, c: 50};
({a, b} = obj);
console.log(a, b)

// Nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
