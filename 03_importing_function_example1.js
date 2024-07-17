// In the previous step you've used syntax 'module.exports = hello;' to prep your file for exporting and use into another file.
//We can "require" it from another file,using this syntax 

const hello = require('./02_exporting_function_example1');
// notice that there is ./ before the relative path- AND WITHOUT .js(filetype)
console.log(hello);


// It can also be done from the node REPL by typing 'node' onto the terminal and bringing up the REPL
// Copying and pasting line 4  (i.e >> const hello = require('./01_intro_to_javaScript');)
// Then calling the function  like this: hello(); no need to wrap in console.log like with VSCode
// NOTE: This will work if  we're in the same current directory where 02_exporting_function_example.js is.
/* Also note! if on terminal 'undefined' pops up then it's because you've console.logged instea dof returned in the block code of the function

E.G.
const hello = () => {
    console.log('Hello!');
  };
  
  // To prepare/prime the file to indicate, Add this at the end of the file to indicate that you'll be exporting the hello function into another file , before going into the file you're going to import it in
  module.exports = hello;
  
>> Notice the console.log in the block code of the function?
>> if your code looked like this requiring the hello() function on the terminal would give the keyword: undefined

INSTEAD OF (this is the correct one:) ....

const hello = () => {
    return 'Hello!';
  };
  
  // To prepare/prime the file to indicate, Add this at the end of the file to indicate that you'll be exporting the hello function into another file , before going into the file you're going to import it in
  module.exports = hello;
  

>> This code above should spit out your block code when you require the function on the terminal



*/


// so to summarise:
/*
>You can require a function on VS Code, allowing you to use function OUTSIDE the file it was written in
> You can do this on the terminal (node REPL) before calling it in the node REPL also
> You can do this on another file of the SAME directory(both require and call - to run the file yuou'd have to go into the terminal also and put in  the following command : node <file_name>)

*/