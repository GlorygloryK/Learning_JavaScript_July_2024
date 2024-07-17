// Exporting a given function
//Here we've got our function hello that we want to export:

const hello = () => {
    console.log('Hello!');
  };
  
  // To prepare/prime the file to indicate, Add this at the end of the file to indicate that you'll be exporting the hello function into another file , before going into the file you're going to import it in
  module.exports = hello;
  
//Using VS Code to call the function we just created in the above lines: 
hello(); 

//When type into CLI(command line interface ie.terminal) "node 02_exporting_function_example.js", the console will spit out "Hello!" , as per the functions block code/ instructions the function gives

//NEXT STEP - Learning to import functions into another file 
// Next file teaches how to import this function(Go to next file)...

