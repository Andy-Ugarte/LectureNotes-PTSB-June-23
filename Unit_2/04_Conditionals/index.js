// Conditional are going to check a statement, and run code depending on whether that statement is true or false

/*
  Falsy Values: values that, when used in a boolean context, evaluate to "false"

  - false
  - 0
  - '', "", `` (any empty string)
  - null
  - undefined
  - NaN (Not a Number)
*/

let isOn = true;

// if statement
if (isOn == true) {
  // this block of code will run only IF the statement evaluates to true
  console.log('The light is on!');
}

/*
  Structure:
  if (statement to evaluate) {
    code that runs if the statement is true
  }
*/

// IF
if (isOn) {
  console.log('The light is on!');
}


isOn = false;

if (isOn == false) {
  console.log('The light has turned off...');
}

/*
  let weather = 85;
  if (weather  <=  70) {
    console.log("It's a nice day");
  } 
*/

/*
  let weather = 85;
  if (weather  <=  70) {
    console.log("It's a nice day");
  } else {
    console.log('Maybe not time for a walk.');
  }
*/

// IF/ELSE
let weather = 85;
let rain = false;
if (weather  <=  70 || rain) {
  console.log("Wear a jacket");
} else {
  console.log('No jacket required');
}

// !  -> NOT (bang!) operator, we are checking whether this is not true. false is not true, meaning false == false -> true
if (!rain) { 
  console.log('Seems to be a clear day');
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    
Silver:
    If It is your name, console log 'Hello, my name is <name>'
    
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let myName = 'jerome';
// let targetName = 'matt';

if (myName !== 'matt') {
  console.log('Hello, is your name ' + myName + '?');
} else {
  console.log('Hello, my name is matt');
}


// IF/ELSE IF
let grade = 67;

if (grade >= 75) {
  console.log('passing');
} else if (grade >= 60) {
  console.log('please see the instructor or TAs');
} else if (grade > 40) {
  console.log('failing');
} else {
  console.log('need more information');
}

/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

// let age = 52;

if (age <= 17) {
  console.log("Sorry, you're too young to do anything");
} else if (age >= 18 && age < 21) {
  console.log("You can vote!");
} else if (age >= 21 && age < 25) {
  console.log("You can drink!");
} else if (age >= 25) {
  console.log("You can rent a car!");
}


// let age = 20;

if (age <= 17) {
  console.log("Sorry, you're too young to do anything");
} else if (age < 21) {
  console.log("You can vote!");
} else if (age < 25) {
  console.log("You can drink!");
} else {
  console.log("You can rent a car!");
}

let age = 17.5;

if (age >= 25) {
  console.log("You can rent a car!");
} else if (age >= 21) {
  console.log("You can drink!");
} else if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("Sorry, you're too young to do anything");
}


// Ternary
let num = 6;

num > 0 ? console.log('Yes') : console.log('No');

// If Statement
if (num > 0) {
  console.log('Yes');
  console.log('Your Number is bigger than 0');
} else {
  console.log('No');
}


let newNum = 7;

newNum == 0 ? 
  console.log('Zero') : 
newNum > 0 ? 
  console.log('Positive') : 
  console.log('Negative');

// Else If Statement
if(newNum == 0) {
  console.log('Zero');
} else if (newNum > 0) {
  console.log('Positive');
} else {
  console.log('Negative');
}


// Switch Statement
let officeCharacter = "Jason";

switch (officeCharacter) {
  // if (officeCharacter === "Michael") {
  case "Michael":
    console.log("My mind is going a mile an hour");
    // }
    break;

  case "Dwight":
    console.log("Perfectenschlag!");
    break;

  case "Jim":
    console.log("Bears. Beets. Battlestar Galactica.");
    break;

  // else {
  default:
    console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
    // String Interpolation: when we can insert variables or other values into a string
    // made possible by using ``, and we have to write a ${} in order to insert information
}


/*
    Write a switch statement that checks a dessert order
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = "cookie";

switch (dessert) {
  case "pie": 
    console.log("Pie, pie, me oh my!");
    break;
  case "cake":
    console.log("Cake is great!");
    break;
  case "ice cream":
    console.log("I scream for Ice Cream!");
    break;
  default:
    console.log(`${dessert} is not on the menu.`);
}


let myAge = 37;
// myAge > 21
switch (true) {
  case myAge >= 25:
    console.log('You can rent a car');
    console.log('You can drink');
    console.log('You can vote');
    break;
  case myAge >= 21:
    console.log('You can drink');
    break;
  case myAge >= 18:
    console.log('You can vote');
    break;
  default:
    console.log('You are too young to do anything');
}