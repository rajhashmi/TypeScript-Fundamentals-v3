"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(num1, num2) {
    return num1 + num2;
}
var add = sum(1, 2);
function getUpper(val) {
    return val.toUpperCase();
}
var capitilize = getUpper("shahid hashmi");
// doing same with arrow function
var getHello = function (name) {
    return "";
};
function signUpUser(name, isPaid, age) {
    return ({ name: name, isPaid: isPaid, age: age });
}
var information = signUpUser("shahid", true, 19);
console.log(information);
var loginUser = function (name, age, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return ({ name: name, age: age, isPaid: isPaid });
};
var loginUserInformation = loginUser("shahid", 19);
console.log(loginUserInformation);
// const mySkils = ['HTML','CSS','JavaScript','TypeScript'];
var mySkils = ['HTML', 'CSS', 19, true];
// TS is smart it will automatic understand what kind of type will be in an array
var mySkils1 = mySkils.map(function (e) {
    return "my skills is ".concat(e);
});
// even we can define explicit also but no need this beciz TS is smart to figure it out 
var mySkils2 = mySkils.map(function (e) {
    return "my skills is ".concat(e);
});
var mySkils3 = mySkils.map(function (e) {
    return "my skills is ".concat(e);
});
//  this type function will make problem ("to return like this or this")
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 K";
}
