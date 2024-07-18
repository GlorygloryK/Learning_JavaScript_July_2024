// Learning about .filter() and .map() methods on arrays in JS


//<-----------------------------------.FILTER() METHOD ---------------------------------------------------->

//Using .filter() method:

//Below we've got an array of names:
const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// We've created a function that returns true or false, depending on the condition i.e. length of the word being  less than 3 words long or not ( i.e. 3 words or longer)
const isShorterThanThree = (name) => {
  if (name.length < 3) {
    return true;
  } else {
    return false;
  }
}

// Here the filter method is being used to iteraate or scan through each element of the names array and filter it based on the condition inside the brackets
// i.e. the condition of length of the word:
const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

// console.log(namesShorterThanThreeLetters); 
//^^^^^^^ Uncomment the line above to see the output - notice that it 'filters' out those conditions that ring true?

// 2. Create a new array of all names uppercased by applying
// the `getUppercased` function to all elements in the `names` array.

const getUppercased = (name) => {
  return name.toUpperCase();
}

const uppercasedNames = names.map(getUppercased);
// console.log(uppercasedNames); 
//^^^^^^^ Uncomment the line above to see the output - what do you get?


//<-----------------------------------.MAP() METHOD ---------------------------------------------------->

//Using .map() method:
//> used to transform - it's a method that takes an array and 'transforms' each element of an array, according to how the block of code instructs each element to be transformed/manipulated :




//<------------------------------------EXERCISES---------------------------------------------------->



/*EXERCISE 1:

Declare a function checkLength that takes a phone number (as a string) as argument, and returns true if this phone number contains 10 characters or less.
Now declare a function filterLongNumbers that takes an array of phone numbers. This function should return only numbers that contain 10 characters or less. It should make use of the function checkLength written previously.
Once your function is written, you should be able to type the following code and have the exact same output:

*/

function checkLength(string_number){
    if(string_number.length <= 10){
        return true 
    }else{
        return false
    }
};

//Checking that the function works  uncomment the 2 lines below vvv :
// example_string = "010203040500000000"
// console.log(checkLength(example_string));
//^^^ uncomment the 2 lines above and run the file on terminal to see what it shows, after typing the following into the terminal: node 13_array_operations.js - Note: make sure you're in the right folder 

my_array = ["1111111111","222","012345678910"];

function filterLongNumbers(array_of_numbers){
    return array_of_numbers.filter(checkLength)
};

// console.log(filterLongNumbers(my_array));
//OR 
// console.log(filterLongNumbers(["1111111111","222","012345678910"]));

//^^^ uncomment the 2 lines above and run the file on terminal to see what it shows, after typing the following into the terminal: node 13_array_operations.js - Note: make sure you're in the right folder 
/*EXERCISE 2:

Write a function generateMessages that takes an array of names and returns an array of personalised messages for each name. 
For example, when given the array above, the function should return an array with the first element being the string 
'Hi Anna! 50% off our best candies for you today!', 
the second element the string 'Hi Laura! 50% off our best candies for you today!', 
and so on.
*/

const list_of_names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

function generateMessages(array_of_names){
    return array_of_names.map(name=> 'Hi '+ name + '! 50% off our best candies for you today!')
};


// console.log(generateMessages(list_of_names));

/*EXERCISE 3:

// Here's an array of objects!
> const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];
copy
To complete this exercise, you'll have to:

use Array's map method again.
access the properties of an object as seen previously.
Questions
Modify the function generateMessages so it uses this new structure and write the correct discount percentage in each message.

*/


const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

function generateMessages(array_of_names){
    return array_of_names.map(element => 'Hi '+ element.name + '! '+ element.discount + '% off our best candies for you today!')
};

// console.log(generateMessages(namesAndDiscounts));
//^^^ uncomment the 2 lines above and run the file on terminal to see what it shows, after typing the following into the terminal: node 13_array_operations.js - Note: make sure you're in the right folder 