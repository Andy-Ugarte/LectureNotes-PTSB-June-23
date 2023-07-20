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