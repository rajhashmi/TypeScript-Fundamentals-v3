// ts is development tool


let age = 19;
// age type in number you can change its value like 23, 45,67 but you cant change the type like string 
age = 23;  // this is allowed 
age = 67;  // this is allowed 

// age = "19" this is not allowed in TypeScript

{
    const age = 19
    console.log(age);
    
// Now i used const when we hover to age it will show you 19 why not Number? becuz think like you have box an you put somthing on it and it's like label "this box contain label 19 " so we can't change the label or we can say we can't change number 

// literal types

// the type 6 is called a literal type, if our let declaration is a variable that can hold any number, the const declaration is one that can hold only 6 - a specific number
}

// Any
// what if you want to create a varible and you can change it's type whenever you want? here you can see
let names; // in type of names would be any becuase typeScript cannot predict the type of its because it's Any 
names = "shahid hashmi";
names = 19;
names = true;

// we can do any thing with this variable becuz its any


function sum(num1:number,num2:number):number{
    return num1 + num2
}
const sum_2 = sum(2,2);
console.log(sum_2);



// You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features.

// Composing Types

// Composing types in TypeScript means creating new types by combining existing ones in various ways. 

// Intersection Types (&): Intersection types combine multiple types into a single type. The resulting type will have all the properties and methods of each individual type.

type Person = {
    firstName: string
}
type Age = {
    age: number
}

type DetailedInfo = Person & Age;

const DetailedInformation: DetailedInfo ={
    firstName: "shahid hashmi",
    age: 19
}

// Union Types (|): Union types allow a value to be of more than one type. This is useful when a variable can hold different types of values.

type Result = string | number;

const value1: Result = "Hello";
const value2: Result = 42;

