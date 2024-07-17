/*This is a file on Javscript Basics from MAKERS material
and is being used by me as a way to look back on my JavaScript learning:

> Printing out onto a terminal using console.log
> Calculations (addition, multiplication)
> Dealing wiith strings (concatenation using plus symbol)
> An Introduction to functions
*/

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
  
// Next file teaches how to export a function...

