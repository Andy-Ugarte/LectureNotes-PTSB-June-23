// Loops

// loops are a block of code that will be repeated a number of times
/*
  For
  For In
  For Of
*/

// for loop takes in 3 "parameters"
//       (1)          (2)     (3)
for (let i = 0; i < 10; i++) {
  // i++ is the same as writing i += 1
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}
/*
  1. initial expression - defining a starting point of our loop
  2. condition - giving us a stopping condition
  3. increment expression - this is going to change our initial value
*/

let e = 7;

for (e = 0; e < 10; e++) {
  console.log(e);
}

console.log('after the loop:', e);

// CHALLENGE: using a for loop, count from 0 to 20, counting by 2's
for (let j = 0; j < 21; j += 2) {
  console.log(j);
}

for (let j = 0; j <= 20; j += 2) {
  console.log(j);
}

for (let j = 0; j <= 20; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}

//                   i < 10
for (let i = 0; i > -10; i--) {
  console.log(i);
}

for (let i = 0; i > -25; i -= 2) {
  console.log(i);
}


// Exploring the Parameters
/*
for ( ; ; ) {
  console.log('testing');
}
*/

let i = 7;

for ( ; i <= 15; i++) {
  console.log(i);
}


let m = -12;
// variable; condition; increment
for ( ; m <= 0; )
{
  console.log(m);
  
  if (m % 3 === 0) {
    m += 5;
  } else {
    m--;
  }
}


let L = 0;

for ( ; ; ) {
  if (L < 10) {
    console.log(L);
    L++;
  } else {
    break;
  }
}

for (let L = 0; L < 10; L++) {
  console.log(L);
}

// CHALLENGE: Using a for loop, add all numbers from 1 to 50, then display the result

let total = 0;

for (let num = 1; ; num++) {
  if(num <= 50) {
    total += num;
  } else {
    console.log(total);
    break;
  }
}

let start = 0;

for (let i = 1; i <= 50; i++) {
  start += i;
}

console.log(start);


// For In
/*
  For In loops are great for iterating over values in an object. Properties in an object are what's called "enumberable"

  "enumerable" just means "countable"
*/

let catDog = {
  name: "CatDog",
  cat: true,
  dog: true,
  legs: 4
}

for (let key in catDog) {
  console.log(key);
  // console.log(catDog.key); // undefined
  console.log(catDog[key]);
}


let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(week);

for (let day in week) {
  console.log(day);
  console.log(week[day]);
}

//                      012345
let myName = "Jerome"

for (let letter in myName) {
  // console.log(letter);
  console.log(myName[letter]);
}


// Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name

let theirName = "mIcHaEl";

// for (let letter in theirName) {
console.log(theirName[0].toUpperCase() + theirName.slice(1).toLowerCase());
//   break;
// }

let theName = "SmOeThInG";
let result = "";

for (let index in theName) {
  // console.log(typeof index);
  if (index == 0) {
    result += theName[index].toUpperCase();
  } else {
    result += theName[index].toLowerCase();
  }
}

console.log(result);


// For Of
/*
  loop over the ITERABLE values of an object,  this means the values we can access by using numbers
*/

let catDog_ = {
  name: "CatDog",
  cat: true,
  dog: true,
  legs: 4
}

/* 
ERROR: Objects are not iterable
for (let item of catDog_) {
  console.log(item);
}
 */

let week_ = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(week_[1]); // Tuesday

for (let day of week_) {
  console.log(day);
}


let myName_ = "Jerome F";
//                      ["J", "e", "r", "o", "m", "e", " ", "F"]
console.log(myName_[1]); // e

for (let letter of myName_) {
  console.log(letter);
}


// While Loops

let city = ["empty street", "building", "building", "building", "light pole", "tree", "empty street"];

let structure = city[0];
let position = 0;
let action = "swinging"

while (structure != "empty street") {
  // console.log("Spider-Man is " + action + " from the " + structure);
  console.log(`Spider-Man is ${action} from the ${structure}`);
  position++;
  structure = city[position];
}

console.log(`Spider-Man lands in the ${structure}`);


// Do While
// Like a while loop, it will repeat code as long as a condition is true, HOWEVER it will always run at least once

let city_block = ["empty street", "building", "building", "building", "light pole", "tree", "empty street"];

do {
  console.log("Spider-Man");
} while (city_block[0] !== "empty street");

// while (city_block[0] !== "empty street") {
//   console.log("spidey");
// }


let spideyHP = 20;
let badGuys = [
  {
    baddie: "Green Goblin",
    hp: 15
  },
  {
    baddie: "Venom",
    hp: 25
  },
  {
    baddie: "Stilt-Man",
    hp: 5
  },
  {
    baddie: "Thug",
    hp: 0
  }
];
// 0.2 * 3 => 0.6 => 0
// 0.4 * 3 => 1.2 => 1
// 0.7 * 3 => 2.1 => 2
let rand = Math.floor(Math.random() * badGuys.length); // 0, 1, 2
let villain = badGuys[rand];
// console.log(villain);
console.log(`${villain.baddie} has appeared!`);

do {
  // The villain will hit Spider-Man
  // spider-man will take some damage, and we will print some text
  console.log(`${villain.baddie} hits Spider-Man`);
  spideyHP -= 1; // spideyHP--;
  console.log(`Spider-Man HP: ${spideyHP}`);

  // Spider-Man will hit the villain
  // we will roll random damage that spider-man will do to the villain
  let spideyHit = Math.floor(Math.random() * 3);
  console.log(`Spider-Man hits ${villain.baddie} for ${spideyHit} damage !!!`);
  villain.hp -= spideyHit;
  console.log(`${villain.baddie} HP: ${villain.hp}`);

  // if Spider-Man loses his health before the villain does, exit the loop
  // villain: -2, spider: 7

  /*
  if (spideyHP === 0) {
    break;
  }
  */
} while (villain.hp > 0 && spideyHP > 0);
// } while (villain.hp > 0, spideyHP > 0); // DEPRECATED

// display text either based on spider-man winning, or the villain being victorious
// say either "spider captures <villain>" OR "<vilain> has taken down spidey"

if (villain.hp <= 0) {
  console.log(`Spider-Man captures ${villain.baddie}`);
} else {
  console.log(`${villain.baddie} has taken down Spider-Man`);
}
