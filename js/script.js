// 1. Declaring and initializing
var age = 30;
console.log(age); // Output: 30

// 2. Declaring without initializing (it will be undefined)
var firstName;
console.log(firstName); // Output: undefined

// 3. Reassigning a var variable
firstName = "John";
console.log(firstName); // Output: John

// 4. Redeclaring a var variable (this is allowed but can lead to confusion)
var age = 35; // This will overwrite the previous age
console.log(age); // Output: 35

// 5. Function scope example
function greet() {
  var message = "Hello from inside the function!";
  console.log(message);
}
greet(); // Output: Hello from inside the function!
// console.log(message); // This would throw an error: message is not defined

// 6. Hoisting example (though it's best practice to declare before use)
console.log(hoistedVar); // Output: undefined (declaration is hoisted, but initialization isn't)
var hoistedVar = "I am hoisted!";
console.log(hoistedVar); // Output: I am hoisted!
