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





// Object Types : ->
// Apart from primitives, the most common sort of type you’ll encounter is an object type. This refers to any JavaScript value with properties, which is almost all of them! To define an object type, we simply list its properties and their types.

// For example, here’s a function that takes a point-like object:

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Here, we annotated the parameter with a type with two properties - x and y - which are both of type number. You can use , or ; to separate the properties, and the last separator is optional either way.

// The type part of each property is also optional. If you don’t specify a type, it will be assumed to be any.


// ========================= Optional Properties

// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

function printNames(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printNames({ first: "Bob" });
printNames({ first: "Alice", last: "Alisson" });
// Try
// In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error. Because of this, when you read from an optional property, you’ll have to check for undefined before using it.

function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
// 'obj.last' is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}





// ==========================================

// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start combining them in interesting ways.

// Defining a Union Type
// The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

// Let’s write a function that can operate on strings or numbers:

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);

// OK
printId("202");

// Error
printId({ myID: 22342 });

// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
// Try

// Working with Union Types
// It’s easy to provide a value matching a union type - simply provide a type matching any of the union’s members. If you have a value of a union type, how do you work with it?

// TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:

function printid(id: number | string) {
  console.log(id.toUpperCase());
// Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'.
}
// Try
// The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

// For example, TypeScript knows that only a string value will have a typeof value "string":

function printIds(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
// Try
// Another example is to use a function like Array.isArray:

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

//  ============================ Type Aliases

// Type Aliases
// We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

// A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoords(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
// Try
// You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:



// =============================

// Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

// Extending an interface

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;
        
// Extending a type via intersections

// type Animal = {
//   name: string;
// }

// type Bear = Animal & { 
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;

// =================================

// Type Assertions
// Sometimes you will have information about the type of a value that TypeScript can’t know about.

// For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

// In this situation, you can use a type assertion to specify a more specific type:

const myCanvass = document.getElementById("main_canvas") as HTMLCanvasElement;
// Try
// Like a type annotation, type assertions are removed by the compiler and won’t affect the runtime behavior of your code.

// You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:

const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

// By themselves, literal types aren’t very valuable:

let x: "hello" = "hello";
// OK
x = "hello";
// ...
x = "howdy";
// Type '"howdy"' is not assignable to type '"hello"'.

// strictNullChecks off

// With strictNullChecks off, values that might be null or undefined can still be accessed normally, and the values null and undefined can be assigned to a property of any type. This is similar to how languages without null checks (e.g. C#, Java) behave. The lack of checking for these values tends to be a major source of bugs; we always recommend people turn strictNullChecks on if it’s practical to do so in their codebase.


// strictNullChecks on
// With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value. Just like checking for undefined before using an optional property, we can use narrowing to check for values that might be null:

// function doSomething(x: string | null) {
//     if (x === null) {
//       // do nothing
//     } else {
//       console.log("Hello, " + x.toUpperCase());
//     }
//   }

// ================================================== Assertion Operator

// Non-null Assertion Operator (Postfix !)

    // TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
    
    function liveDangerously(x?: number | null) {
      // No error
      console.log(x!.toFixed());
    }
// Try
    // Just like other type assertions, this doesn’t change the runtime behavior of your code, so it’s important to only use ! when you know that the value can’t be null or undefined.



// ====================================== Enums
// Enums are a feature in TypeScript that lets you define a special kind of value. This value can only be one of a specific set of choices that you give it. Imagine you're trying to represent different categories of things, like colors, days of the week, or states of a process. Enums help you do this in a clear and organized way.

// For example, let's take colors. You might want to work with colors like "Red," "Green," and "Blue." Instead of using regular strings like "Red" and hoping you never make a typo, you can use an enum. Here's how it works:


enum Color {
    Red,
    Green,
    Blue
  }
  
  const selectedColor = Color.Green;
  


export{}