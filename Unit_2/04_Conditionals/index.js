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