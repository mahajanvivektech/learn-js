// Use any data type
// Return any data type
// short-circuiting
// OR operator will always return first truthy value
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

const restaurant = {};
const numGuests = restaurant.numGuests ? restaurant.numGuests : 10;
const numGuests1 = restaurant.numGuests || 10;

// AND does completely opposite of OR
// When the first value is falsy then immediately returns the falsy value
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas
console.log('Hello' && 23 && null && 'jonas'); // null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');


