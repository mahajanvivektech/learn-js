var expense = {
  type: 'Business',
  amount: '$45 AUD'
};

// var type = expense.type;
// var amount = expense.amount;

// ES6
// Destructuring an object: pulling off properties
const { amount, type } = expense;
console.log(amount, type);

// use in function argument
var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary({ name, extension, size }) {
  console.log(`The file ${name}.${extension} is of size ${size}`);
}

fileSummary(savedFile);

// Destructuring an array: pulling off individual elements
const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [google, ...rest] = companies;
console.log(google, rest);

// Array and Object destructuring together
const techCompanies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' },
];

const [{ location }] = techCompanies;
console.log(location);

const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [loc] } = Google;
console.log(loc);