/* EXERCISE 1:

Use a for loop to iterate numbers from 1 to 20, and for each of them, print whether the number is even or odd.

You should get the following output:

1 is odd
2 is even
3 is odd
(...)

*/

// for (let i = 1; i<=20; i++){
//     if(i % 2 ===0 ){
//         console.log(i + " is even")
//     }else{
//         console.log(i + " is odd")
//     }
// };


/* EXERCISE 2:
Write a function fizzbuzzUntil that accepts a number. This function should use a loop to loop through all numbers from 1 to the given one, call the fizzBuzz function for the current number and print the result.

You should get the following output:

// In node

const fizzbuzzUntil = require('./fizzbuzzUntil');

fizzbuzzUntil(10);

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz

*/



function fizzBuzz(num){
    
};


function fizzbuzzUntil(number){
    for(i = 1; i <= number; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if (i % 5 === 0){
            console.log("Buzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else{
            console.log(i);
        };
    }
    
};

console.log("Challenbge started:");
console.log(fizzbuzzUntil(10));


// module.exports = fizzbuzzUntil; 