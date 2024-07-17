// In the previous step you've used syntax 'module.exports = hello;' to prep your file for exporting and use into another file.
//We can "require" it from another file,using this syntax 


// It can also be done from the node REPL:
// NOTE: This will work if  we're in the same current directory where 02_exporting_function_example.js is.
const hello = require('./01_intro_to_javaScript');

hello();
