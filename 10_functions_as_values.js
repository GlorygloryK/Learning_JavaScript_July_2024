/*Exercise
Declare a function lowercaseMessage that returns the lowercase version of the given string.

Declare a function transform that behaves like the one above:

takes one string and one function as arguments
calls the function on the given string.
Call transform by giving it the string 'WHY ARE YOU SHOUTING?' and the function lowercaseMessage. It should return a lowercase version of the message ('why are you shouting?') */



// function lowercaseMessage(string){
//     return string.toLowerCase()
// };

// // console.log(lowercaseMessage("HELLO WORLD!"));

// function transform(string, a_function){
//     return a_function(string);
// };

// console.log(transform('WHY ARE YOU SHOUTING?', lowercaseMessage))



/* EXERCISE 2:
Challenge
You've previously learned how to declare a function, and you've also seen that a function can be assigned just like a variable. To complete this exercise, you'll have to pass a function as an argument to another function.

Declare a function notifyByEmail that accepts an email address as argument and returns the string 'Email sent to: <EMAIL>'.
Declare a function notifyByText that accepts a phone number (as a string) as argument and returns the string 'Text sent to: <PHONE NUMBER>'.
Now declare a generic function notify that accepts a first string argument (either an email or a phone), and the function to use in second argument. This function should only rely on calling the function passed in second argument, not declare a string by itself.
Use the function notify with the two previous functions to:
send an email to hello@makers.tech.test and get the expected output.
send a text to +10000000000 and get the expected output.
*/


function notifyByEmail(email){
    return 'Email sent to: ' + email
};


function notifyByText(number){
    return 'Text sent to: ' + number
};


function notify(contact, a_function){
    if(a_function === notifyByEmail && contact.includes("@")){
       return notifyByEmail(contact)
    } else if (a_function === notifyByText && !contact.includes("@")){
        return notifyByText(contact)
    }else {
        return " Please try again"
    }
};

console.log(notify("hello@little.com", notifyByEmail));
console.log(notify("0928384884", notifyByText));
console.log(notify("hello@little.com", notifyByText));
console.log(notify("0928384884", notifyByEmail));