/*EXERCISE 1:
Create an array of a few names of people you know and:
Print the array's length.
Print the second name of the array.
Create a new array by adding a new name to the existing array.

*/

an_array_of_names = ["Glory","Phoebe", "Mark", "Jennifer", "Beneditte", "Georgia", "Peter"];

// console.log("This is the length of the array:");
// console.log(an_array_of_names.length);
// console.log("This is the 2nd name of the array:");
// console.log(an_array_of_names[1]);
// an_array_of_names.push("Alan");
// console.log(an_array_of_names);

// the_other_array = an_array_of_names.concat("Lucy-Anne");
// console.log(the_other_array);


/*EXERCISE 2:
Create an array of all numbers from 1 to 10. Calculate the sum of all these numbers by looping through the array.
*/

// const numbers_array = [1,2,3,4,5,6,7,8,9,10];
// console.log("numbers_array");
// container = 0;
// numbers_array.forEach((number)=> 
//     container += number
// );

// console.log(container);




/*EXERCISE 3:
You are helping your friend, who owns a candies business, with their website. Every order placed on the website gets assigned an order ID, such as 1274.

Your friend would like to create batches of five order IDs. They ask you if you could give a hand and write a small program to do this.

To complete this exercise you will have to find out:

how to add elements to an array with the .concat method
how to get the length of an array
Questions
Declare a function addToBatch that takes two arguments, an array and a number, and returns a new array by adding the number to the array.
Now, make sure this function does not add the number if the array's length is already 5 or greater — it should just return the array untouched in that case.
Once your function is written, you should be able to type the following code into the node REPL and have the exact same output:

> const addToBatch = require("./addToBatch.js")
> addToBatch([1], 3); 
[ 1, 3 ]

> addToBatch([1, 2, 3], 4); 
[ 1, 2, 3, 4 ]

> addToBatch([], 8); 
[ 8 ]

> addToBatch([1, 2, 3, 4, 5, 6], 7); 
[ 1, 2, 3, 4, 5, 6 ]

> addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); 
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


*/

function addToBatch(array, number){
    if (array.length >= 5){
        console.log(array);
    } else {
        console.log(array.concat(number));
    }
};

addToBatch([0, 1], 1);