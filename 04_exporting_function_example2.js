// This function take one argument, and when sayHello('Glory') is called, a personalised message is printed out:
// Here is my sayHello() function being coded:

const sayHello = name => {
    return "Hello " + name + "!"
}


// Now to export from this file, for use in another file , type ...
module.exports = sayHello;

// call the function and wrap in console.log, to see it on the terminal when the file is run:
console.log(sayHello("Glory"));