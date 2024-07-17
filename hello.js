const hello = () => {
    console.log('Hello!');
  };
  
  // To prepare/prime the file to indicate, Add this at the end of the file to indicate that you'll be exporting the hello function into another file , before going into the file you're going to import it in
  module.exports = hello;
  
//Using VS Code to call the function we just created in the above lines: 

hello(); 