// Null coalescing
const restaurant = {};
restaurant.numOfGuests = 0;
const guests = restaurant.numOfGuests || 10;
console.log(guests);

// Null coalescing with idea nullish values instead of falsy values.
// Nullish: null/undefined
const guestCorrect = restaurant.numOfGuests ?? 10;
console.log(guestCorrect);