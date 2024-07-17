
// 1. Running a Hello message on the console
console.log("Hello!");

console.log("We are now dealing with maths, putting it out onto the terminal")
// 2. Doing maths on the console
console.log(2+2);
a = 4
b = 6
console.log(a+b);
console.log(a*b);

console.log("We are now dealing with strings:")
// 3. Dealing with strings 
const greeting = 'Hello ';
const name = 'Makers';

console.log (greeting + name);

/* FUNCTIONS */


//1. Example of a function
console.log("We are now dealing with functions:")
const returnFour = () => {
    return 4;
  };
  
  const something = returnFour;
  console.log(something);
  

// 2. Exporting a given function
//Example uses a function , called hello

const hello = () => {
    console.log('Hello!');
  };
  
  // Add this at the end of the file to indicate that you'll be exporting the hello function into another file , before going into the file you're going to import it in
  module.exports = hello;