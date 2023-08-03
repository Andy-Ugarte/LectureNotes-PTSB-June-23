/*
  Arrays
    - Denoted with Square Brackets [ ]
    - Indexed, with that index starting at 0
*/

const list = ["milk", "bread", "chicken", "coffee"];
//                     0           1             2             3

console.log(list); // entire array
console.log(list[2]); // indexed value of "chicken"
console.log(list.length); // number: the "length" or number of items in an array

// list = 'Something Else';
console.log("before:", list[0]);
list[0] = "chocolate milk";
console.log("after:", list[0]);

// Storing Data Types
//                                    0             1       2           3..
let kitchenDrawer = [
  "Scissors",
  12,
  true,
  "Batteries",
  ["milk", "bread", "chicken", "coffee"],
];

/* let drawerList = kitchenDrawer[4];

console.log(drawerList[3]); */

console.log(kitchenDrawer[4][3]);

console.log(typeof kitchenDrawer); // object
console.log(kitchenDrawer instanceof Array); //true -> this is how we can check if something's type is array

// Array Methods
let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// a method is a function that is part of an object, and is accessed using dot notation
// most familiar to us would be the log method on the console object console.log()
console.log(food);

// push - add new information to the end of an array
food.push("Pizza", "Hotdog");
// food.push('Hotdog');
console.log("push:", food);

// pop - remove information from the end of an array, returning the value removed
// let oldFood = food.pop();
console.log(food.pop());
console.log("pop:", food);
// console.log('old food:', oldFood);

// shift - remove the first item in an array, returning the value of that item
let first = food.shift();
console.log(first);
console.log("shift:", food);

// unshift - add an item to the beginning of an array
food.unshift("Pumpkin Pie");
console.log("unshift:", food);

// splice - allows us to insert or remove information as we desire, using 3 different arguments
// start at index 2, remove 1 item, then insert 'Tacos'
food.splice(2, 1, "Tacos");
console.log("splice:", food);
// Just remove 'Hotdog'
console.log(food[food.length - 2]);
food.splice(food.length - 2, 1); // removes second to last item, without adding new information
console.log("hotdog removed:", food);

food.splice(3, 0, "Jerome's Pizza Party");
console.log("party time:", food);

// toString - returns the food array as a string
// let foodString = food.toString();
console.log(food.toString());

// filter and includes methods
let fruits = ["apple", "pear", "mango", "orange", "pineapple"];

// filter - allow us to only grab items from an array that match certain conditions, retuning us a new array
const filteredFruit = fruits.filter((fruit) => {
  // if my fruit is not mango, this is true
  let result = fruit !== "mango";

  // only if my returned value is true, does the item get added to the new array
  return result;
});

// My original array has not been changed
console.log(fruits);
console.log(filteredFruit);

let fruit1 = "pineapplepen";
// includes IS case-sensitive
console.log(fruit1.includes("apple"));

// only includes fruit that contain "apple"
const doubleFilteredFruit = fruits.filter((fruit) => fruit.includes("apple"));
console.log(doubleFilteredFruit);

// not contain ANY fruit that include "apple"
const tripleFilteredFruit = fruits.filter((fruit) => !fruit.includes("apple"));
console.log(tripleFilteredFruit);
// concise body

/*
  1. Given the current Array, add three new movies, CHECK
    - with their category being either "Horror" or "Action". CHECK
  2. Then, create 2 new arrays, 
    - one which only contains the Horror movies, and one which only contains the Action movies. 
  3. Lastly, print out each array on their own lines in the console.
*/

const movies = [
  {
    name: "Face/Off",
    category: "Action",
  },
  {
    name: "Get Out",
    category: "Horror",
  },
];

//  Unshift, Splice, Push
movies.unshift({ name: "28 Days Later", category: "Horror" });
console.log(movies);

movies.splice(2, 0, { name: "John Wick", category: "Action" });
console.log(movies);

movies.push({ name: "Barbarian", category: "Horror" });
console.log(movies);

// Filter - does not edit the original array
let actionMovies = movies.filter((movie) => {
  if (movie.category === "Action") {
    return true;
  } else {
    return false;
  }
});
let horrorMovies = movies.filter((movie) => movie.category === "Horror");

console.log(actionMovies);
console.log(horrorMovies);
// Arrow Function
// let myArrow = number => number + 2;
// Anonymous Arrow Function
// number => number + 2;

const newMovies = [
  { name: "Face/Off", category: "Action" },
  { name: "Get Out", category: "Horror" },
  { name: "28 Days Later", category: "Horror" },
  { name: "John Wick", category: "Action" },
  { name: "Barbarian", category: "Horror" },
];

// Callback Functions
// A callback function is a function which is "called", or invoked, inside of another function. This is typically done by passing a function as an argument.
let checkMovieCategory = (movie) => {
  if (movie.category === "Action") {
    console.log(movie.name);
    return movie.name;
  }
};

function filter(exampleCallback) {
  for (let i = 0; i < newMovies.length; i++) {
    // I might not want to just print out my movie object every time I run this function
    console.log(newMovies[i]);
    // Maybe I just want the name sometimes
    exampleCallback(newMovies[i]);
  }
}
// console.log(filter);
filter(console.log);
// Anonymous Function
// filter(function(movie) {
//   if (movie.category === 'Action') {
//     console.log(movie.name);
//     return movie.name;
//   }
// });


// .find method
// Setup
let tmnt = [
  'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'April'
];

let character = 'Leo';

function search(target) {
  return target === character;
}

// use the .find() method to search an array for a value.
// the .find method does take a callback function to run on each value. in this case, we are checking for the name 'Leo'
console.log('Find:', tmnt.find(search)); // Leo

character = 'Baxter';
console.log('Baxter:', tmnt.find(target => target === character)); // undefined


// .forEach method
// forEach method is going to perform the same task on each element of an array. this will not modify the original array

let newFoodList = [
  'apple', 'pear', 'cheese', 'peach', 'pizza'
];

for(let i = 0; i < newFoodList.length; i++) {
  console.log(newFoodList[i]);
}

// forEach method
// newFoodList.forEach(food => console.log('forEach:', food));
let doubleNewFood = newFoodList.forEach(food => console.log('forEach:', food));
// .forEach() method does NOT return ANY values, it simply runs the function provided on each element of the array.
console.log('Double New Food:', doubleNewFood);


// .map method
// loop over an array, and take in a callback function and perform a task on each item within it
let numbers = [1, 2, 3, 4, 5];

// numbers.map(num => console.log(num ** 2));
// UNLIKE .forEach() method, .map() method DOES return a value each time it runs the function. In this case, console.log does not return a value, so we get "undefined" as our information in a new array from the .map() method
let exampleNumbers = numbers.map((num) => {
  console.log(num ** 2);
  return num ** 2;
});
console.log('exampleNumbers:', exampleNumbers);


// DESTRUCTURING
/*
  Array destructuring allows us to unpack values from arrays, or even properties from objects, into distinct variables

  Destructuring syntax looks very similar to array literals, buti s on the LEFT side of the assignment operator (=)
*/

let fullName = ['Jerome', 'Flaherty'];
/* 
let firstName = fullName[0]; // assign the first index of fullName to firstName
let lastName = fullName[1];
 */
// let [firstName, lastName] = fullName; // Destructuring an array
let [,lastName] = fullName; // Destructuring an array
// Destructuring will follow index order when assigning variables. Whichever variable is declared first, will take the first index. We may also add commas (,) in order to skip indexes we do not want

// console.log('first:', firstName);
console.log('last:', lastName);

// SPREAD OPERATOR
/*
  the spread operator is going to take values from an array, and "spread" them out, giving us a list of each value individually. This is NOT given to us as an array, rather it is each value independantly
*/

let characterName = ['Robert', 'Downey', 'Jr.'];

console.log(characterName);
console.log(...characterName); // spread operator
// console.log('Robert', 'Downey', 'Jr.'); // this is the result of that spread operator

// by wrapping the spread operator in square brackets, we can create a new array containing each same value from an old array. This will avoid having duplicate reference issues
let ironMan = [...characterName];

ironMan[0] = 'Tony';

console.log('iron man:', ironMan);

/*
  Using this example
  let numberTest = 112;
  let fullName = ['Jerome', 'Flaherty'];
  let newFullName = fullName;

  let firstName = fullName[0];
  ------------------------------------
  VARIABLES
  NAME                            VALUE
  firstName                      'Jerome'
  numberTest                   112
  fullName                        FIRST_BUFFER
  newFullName                 FIRST_BUFFER
  -------------------------------------
  FIRST_BUFFER
  POSITION                     VALUE
  0                                    'Jerome'
  1                                    'Flaherty'
*/

// REST SYNTAX
// when we destructure an array, sometimes we only want some information, and don't really mind keeping the rest in an array. This is where Rest Syntax comes in useful.

let uprightStaff = ['Jerome', 'Ian', 'Conor'];
// const [,,,chameleon] = uprightStaff;
const [instructor, ...learningAssistant] = uprightStaff;
// const [...instructor] = uprightStaff;
// Rest Syntax will add the remaining items in the array ALL to the final variable as a new array. rest syntax MUST be the FINAL item within a destructuring.

// console.log(chameleon); // undefined
console.log(instructor);
console.log(learningAssistant);