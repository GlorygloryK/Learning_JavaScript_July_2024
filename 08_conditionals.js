/* EXERCISE 1:
Define a function getNumberSign that takes a number and returns either 'zero', 'positive' or 'negative' depending on its sign:
> getNumberSign(3);
'positive'

> getNumberSign(0);
'zero'

> getNumberSign(-5);
'negative'

*/

function getNumberSign(num){
    if(num > 0){
        console.log("positive");
    }else if (num === 0){
        console.log("zero");
    }else{
        console.log("negative");
    };
};

// console.log("should expect zero:")
// getNumberSign(0);

// console.log("should expect positive:")
// getNumberSign(1);

// console.log("should expect negative:")
// getNumberSign(-1);





/* EXERCISE 2:
A colleague just asked you some help to debug their code.

const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length == validLength) {
    true;
  } else {
    false;
  }
}
copy
When calling this function, something doesn't work as expected. What fix can you suggest to solve the problem?

*/

// const isValidLength = (phoneNumber) => {
//     const validLength = 11;
//     if (phoneNumber.length === validLength) {
//         return true;
//     } else {
//         return false;
//     }
//   }
  
// console.log("Hello!");
// // console.log(isValidLength(97));
// console.log(isValidLength("97"));
// console.log(isValidLength("12345678912"));


/* EXERCISE 3:
Write a fizzBuzz function in JavaScript. As a reminder, this function should take a number as argument, and then either:

Return "Fizz" if this number is divisible by 3.
Return "Buzz" if this number is divisible by 5.
Return "FizzBuzz" if this number is divisible by both 5 and 3.
Otherwise, Return the number itself.
*/

function fizzBuzz(num){
    if(num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz");
    }else if (num % 5 === 0){
        console.log("Buzz");
    }else if(num % 3 === 0){
        console.log("Fizz");
    }else{
        console.log(num);
    };
    
};


// console.log("Fizzbuzz function:");
// console.log("Should give Fizz:");
// fizzBuzz(6);
// console.log("Should give Buzz:");
// fizzBuzz(10);
// console.log("Should give FizzBuzz:");
// fizzBuzz(15);
// console.log("Should give back the inputed number:");
// fizzBuzz(22);


   