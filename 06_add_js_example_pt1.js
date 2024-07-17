const add = (a, b) => {
    return a + b
};

const multiply = (a, b) =>{
    return a * b
};


console.log(multiply(2, add(4,4)));


// const calculator = require('./06_add_js_example_pt1')
module.exports = add;
module.exports = multiply;