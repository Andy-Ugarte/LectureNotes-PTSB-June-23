// Scope

// Global Scope: the entire file
// Local Scope: the current block of code

let x = 12;

function scope() {
  let x = 33;
  console.log(x); // 33
  // start by looking for a local variable with that given name, then expand into the previous code block and search again.
}

scope();
console.log(x); // 12

let y = 12;

function scopeY() {
  y = 33; // redefining
  console.log(y); // 33
}

scopeY();
console.log(y); // 33


/*
  Variable Keywords:
    - var: scoped to the nearest function block
    - let: scoped to the nearest enclosing block
    - const: cannot be reassigned
*/

// VAR
var z = 12;

function varTest() {
  var z = 33;

  if (1 == 1) {
    var z = 45;
    console.log(`VAR - Within If: ${z}`); // 45
  }

  console.log(`VAR - Outside If: ${z}`); // 45
}

varTest();
console.log(`VAR - Outside Function: ${z}`); // 12


// LET
let a = 12;

function letTest() {
  let a = 33;

  if(true) {
    let a = 45;
    console.log(`LET - Within If: ${a}`); // 45
  }

  console.log(`LET - Outside If: ${a}`); // 33
}

letTest();
console.log(`LET - Outside Function: ${a}`); // 12


// CONST
// const follows the same block rules as let
const b = 12;

function letTest() {
  const b = 33;

  if(true) {
    const b = 45;
    console.log(`CONST - Within If: ${b}`); // 45
  }

  console.log(`CONST - Outside If: ${b}`); // 33
}

letTest();
console.log(`CONST - Outside Function: ${b}`); // 12