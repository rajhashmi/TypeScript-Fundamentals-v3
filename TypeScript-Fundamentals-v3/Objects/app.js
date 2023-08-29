"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this is not right way to make object in TS
var User = {
    name: "shahid",
    age: 19,
    isActive: true
};
function createUser(_a) {
    var string = _a.name, number = _a.age, boolean = _a.isActive;
}
createUser({ name: 'shahid', age: 19, isActive: true });
function createCourse() {
    return ({ name: 'typeScript', age: 19, isActive: true });
}
