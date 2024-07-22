/* EXAMPLE:*/
class Rectangle {

    // A constructor, to give initial arguments.
    constructor(height, width) {
  
      // We can define attributes stored on the instance with `this`
      this.height = height;
      this.width = width;
    }
  
    // A method.
    getArea() {
      return this.height * this.width;
    }
  }
  
  // To Export the class:
  module.exports = Rectangle;
  

// create a new instance and call a method of the instance: 
const rect = new Rectangle(4, 10);

// console.log(rect.getArea()); // 40
  



/*EXERCISE 1:

We would like to implement a class to represent a user account. Here is how we should be able to use this class:

> const user = new User('Uma');

> user.getName(); 
'Uma'

> user.getIntroduction();
'Hi, my name is Uma'

*/



class User{
    constructor(name){
        this.name = name 
    }

    getName(){
        return this.name 
    }

    getIntroduction(){
        return 'Hi, my name is ' + this.name 
    }
}

// const user = new User('Uma');

// console.log(user.getName()); // 'Uma'
// console.log(user.getIntroduction()); // 'Hi, my name is Uma'



/*EXERCISE 2:

Given the following array of User instances (the class from the previous exercise):

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];
copy
We'd now like to have a class UserBase that behaves like this:

> const userBase = new UserBase(users);

> userBase.count();
3

> userBase.getNames();
[ 'Uma', 'Josh', 'Ollie' ]

> userBase.getIntroductions();
[
  'Hi, my name is Uma',
  'Hi, my name is Josh',
  'Hi, my name is Ollie'
]
*/

// Define an array, called users:
const example_users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

  // Create a function. that takes this array into account, as an argument:
class UserBase{
    constructor(users){
        this.users = users 
    }
    
    count(){
        return this.users.length
    }

    getNames(){
        return this.users.map((user) => user.name);
    }

    getIntroduction(){
        return this.users.map((user) => 'Hi, my name is ' + user.name )
    }
};


const new_userBase = new UserBase(example_users);
// console.log(new_userBase);
// console.log(new_userBase.count());
// console.log(new_userBase.getNames());
// console.log(new_userBase.getIntroduction());

// ^^^^ uncomment to see the answers 


/*EXERCISE 3:
Implement the classes Candy and ShoppingBasket so you can require them into node and get the following behaviour:

> const candy = new Candy('Mars', 4.99);

> candy.getName();
'Mars'
> candy.getPrice();
4.99

> const basket = new ShoppingBasket();
> basket.getTotalPrice();
0

> basket.addItem(candy);

> basket.getTotalPrice();
4.99

> basket.addItem(new Candy('Skittle', 3.99));
> basket.addItem(new Candy('Skittle', 3.99));

> basket.getTotalPrice();
12.97



*/


class Candy{
    constructor(name, price){
        this.name = name 
        this.price = price
    }

    getName(){
        return this.name

    }

    getPrice(){
        return this.price
    }

};

const candy = new Candy('Snickers', 4.99);
// console.log(candy.getName());
// console.log(candy.getPrice());

// ^^ uncomment to see the answers

class ShoppingBasket{
    constructor(){
        this.basket = []
        this.price = 0
    }

    getTotalPrice(){
        return this.price
    }

    addItem(candy){
        this.basket.push(candy)
        this.price += candy.price 

    }

};
const basket = new ShoppingBasket();
console.log(basket);
// console.log(basket.price);
basket.addItem(candy);
console.log(basket);

