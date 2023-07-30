/*
  Arrays
    - Denoted with Square Brackets [ ]
    - Indexed, with that index starting at 0
*/

const list = ['milk', 'bread', 'chicken', 'coffee'];
//                     0           1             2             3

console.log(list); // entire array
console.log(list[2]); // indexed value of "chicken"
console.log(list.length); // number: the "length" or number of items in an array

// list = 'Something Else';
console.log('before:', list[0]);
list[0] = 'chocolate milk';
console.log('after:', list[0]);

// Storing Data Types
//                                    0             1       2           3..
let kitchenDrawer = ["Scissors", 12, true, 'Batteries', [
  'milk', 'bread', 'chicken', 'coffee'
]];

/* let drawerList = kitchenDrawer[4];

console.log(drawerList[3]); */

console.log(kitchenDrawer[4][3]);

console.log(typeof kitchenDrawer); // object
console.log(kitchenDrawer instanceof Array); //true -> this is how we can check if something's type is array


// Array Methods
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// a method is a function that is part of an object, and is accessed using dot notation
// most familiar to us would be the log method on the console object console.log()
console.log(food);

// push - add new information to the end of an array
food.push('Pizza', 'Hotdog');
// food.push('Hotdog');
console.log('push:', food);

// pop - remove information from the end of an array, returning the value removed
// let oldFood = food.pop();
console.log(food.pop());
console.log('pop:', food);
// console.log('old food:', oldFood);

// shift - remove the first item in an array, returning the value of that item
let first = food.shift();
console.log(first);
console.log('shift:', food);

// unshift - add an item to the beginning of an array
food.unshift('Pumpkin Pie');
console.log('unshift:', food);

// splice - allows us to insert or remove information as we desire, using 3 different arguments
// start at index 2, remove 1 item, then insert 'Tacos'
food.splice(2, 1, 'Tacos');
console.log('splice:', food);
// Just remove 'Hotdog'
console.log(food[food.length-2]);
food.splice(food.length-2, 1); // removes second to last item, without adding new information
console.log('hotdog removed:', food);

food.splice(3, 0, "Jerome's Pizza Party");
console.log('party time:', food);

// toString - returns the food array as a string
// let foodString = food.toString();
console.log(food.toString());


// filter and includes methods
let fruits = ['apple', 'pear', 'mango', 'orange', 'pineapple'];

// filter - allow us to only grab items from an array that match certain conditions, retuning us a new array
const filteredFruit = fruits.filter(fruit => {
  // if my fruit is not mango, this is true
  let result = fruit !== 'mango';

  // only if my returned value is true, does the item get added to the new array
  return result;
});

// My original array has not been changed
console.log(fruits);
console.log(filteredFruit);

let fruit1 = 'pineapplepen';
// includes IS case-sensitive
console.log(fruit1.includes('apple'));

// only includes fruit that contain "apple"
const doubleFilteredFruit = fruits.filter(fruit => fruit.includes('apple'));
console.log(doubleFilteredFruit);

// not contain ANY fruit that include "apple"
const tripleFilteredFruit = fruits.filter(fruit => !fruit.includes('apple'));
console.log(tripleFilteredFruit);
// concise body