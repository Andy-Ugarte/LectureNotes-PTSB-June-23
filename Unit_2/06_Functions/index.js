/*
  Functions:
    - a block of code that performs a particular task
    - simplified programs that run a task when *invoked*
*/

//  (1)      (2)
function hi() {
  // our block of code
  console.log('HI');
}

/*
  Function Declaration

  1- keyword, this tells javascript we are making a function
  2- a name for our function, this can be anything we want, followed by parenthesis for parameters
*/

// (1)
let hey = function hi() {
  console.log('HI');
}

/*
  Function Expression

  1- the variable "hey" is now representing the function "hi"

  Expression vs Declaration:
    expression do NOT get "hoisted"
    declaration DO get "hoisted"
*/

function hi() {
  console.log('HI');
}

// Invoking the function | AKA "calling" the function
hi();

// Our function does not get invoked if we do not use ()
// hi;
// let myName = "Jerome";
// myName;

let hello = function hi() {
  console.log("Timmy Turner");
}

hello();

console.log('line 53:', hello);
console.log('line 54:', hello());


// Create a function that, when invoked, lists out the numbers 1-10

function counting() {
  // list the numbers from 1 - 10
  /* for (let i = 1; i <= 10; i++) {
    console.log(i);
  } */

  /* console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
  console.log(10); */

  /* let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  } */

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let number of numbers) {
    console.log(number);
  };
};

counting();

/*
  Naming Conventions/Naming Styles:
  
  In JavaScript, we use camelCasing as our standard naming convention. However, ther are some cases where it can be argued to use PascalCasing

    PascalCasing: the first letter of the first word is capital, and the first letter of each subsequent word is capital
    
    camelCasing: the first word is all lower case, and the first letter of subsequent words is capital

    kebab-casing: has a hyphen - (or dash) between each word, all lowercase

    snake_casing: has an underscore _ between each word, all lowercase
*/

let challengeObject = {
  first: "This",
  second: "is",
  third: "really",
  fourth: "cool!"
};

// Given the object, print out each value individually using a function

function cool() {
  /* console.log(challengeObject.first);
  console.log(challengeObject.second);
  console.log(challengeObject.third);
  console.log(challengeObject.fourth); */

  for (let property in challengeObject) {
    console.log(challengeObject[property]);
  };

  // Recursion - calling a function within itself
  // cool();
};

cool();


// Parameters & Arguments
//                    (1)
function hi(nameInput) {
  console.log(`Hi, ${nameInput}`);
  //                                 (2)
};

//    (3)
hi('Jamiroquai');
hi('Jack Black');
hi(347);
hi('Jack Black', 'Jamiroquai');

/*
  1- parameter(s) that the function is accepting or holding
  2- using string interpolation to refer to the value held in the parameter
  3- this is where we give the function an "argument" which becomes the value of the parameter
*/

let register = function order(ticket) {
  console.log(`I exchanged my ticket for a ${ticket}`);
};

register('cheese pizza');
register('Taco Pack');


function myName(fName, lName) {
  let fullName = fName + ' ' + lName;
  console.log(`Hello, my name is ${fullName}`);
};

let firstName;
let lastName = 'Wayne';

myName('Bruce', 'Wayne'); // Bruce Wayne
myName('Wayne', 'Bruce'); // Wayne Bruce
myName('Bruce'); // Bruce undefined
myName(firstName, lastName); // undefined Wayne


// Return

function myName(fName, lName) {
  let fullName = fName + ' ' + lName;
  console.log(`Hello, my name is ${fullName}`);
  // return - allow us to send information OUTSIDE of a function
  return 'full name';
  // We are not allowed to run any code in a function after we return. Be careful of where and when we use this
  console.log('Testing the console.log');
};

let fullName = myName('Jerome', 'Flaherty');

console.log('myName:', myName('Jerome', 'Flaherty'));
console.log('fullName:', fullName);

// capitalize the first letter of a word, and lowercase the rest
function capitalize(word) { // let word = "pReTzEl"
  let capName = "";
  for(let letter in word) {
    if (letter == 0) {
      capName += word[letter].toUpperCase();
    } else {
      capName += word[letter].toLowerCase();
    };
  };

  return capName;
};

let capital = capitalize("pReTzEl");
console.log(capital);
capital = capitalize('SoMEThinG elSE');
console.log(capital);