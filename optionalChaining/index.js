// newer feature of objects and arrays
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [starterIndex, mainIndex];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// In optional chaining if a certain property does not exist,
// then undefined is returned immediately.
const { openingHours: { mon } } = restaurant;
console.log(mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
days.forEach(day => {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
});

// Methods
const { order } = restaurant;
console.log(...order?.(0, 1) ?? 'Method doesn\'t exist');

// Arrays
const users = [
  { name: 'Jonas', email: 'hello@jonas.io' },
];
console.log(users[0]?.name ?? 'User array empty');


