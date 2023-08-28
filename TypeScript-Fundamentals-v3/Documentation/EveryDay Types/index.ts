// We’ll start by reviewing the most basic and common types you might encounter when writing JavaScript or TypeScript code. These will later form the core building blocks of more complex types.

// The primitives: 
//  string, number and boolean


// Note :->

// number is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number


// Any
// The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.


// Type Annotations on Variables :->
// When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify the type of the variable:

// let myName: string = "Alice";



// Functions :->
// Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions.

function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }

//   When a parameter has a type annotation, arguments to that function will be checked:



// Return Type Annotations :->
// You can also add return type annotations. Return type annotations appear after the parameter list:

function getFavoriteNumber(): number {
  return 26;
}


// Anonymous Functions :->

// Anonymous functions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.

// Here’s an example:

const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

// Even though the parameter s didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.

// This process is called contextual typing because the context that the function occurred within informs what type it should have.

export{}