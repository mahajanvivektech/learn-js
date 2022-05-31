const oneWord = str => str.replace(/ /g, '').toLowerCase();

const upperFirstWord = str => {
  const [ first, ...others ] = str.split(' ');
  return [ first.toUpperCase(), ...others ].join(' ');
};

// transformer: Higher order function
// fn: Callback function
const transformer = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

const high5 = () => console.log('HELLO');
['Jonas', 'Martha', 'Adam'].forEach(high5);