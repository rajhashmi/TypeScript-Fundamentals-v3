function createUser(user) {
    return ({ name: "", age: 19, isAcrive: true });
}
createUser({ name: "", age: 19, isAcrive: true });
var myUser = {
    _id: '123',
    name: "s",
    age: 19,
    isActive: true
};
myUser.age = 15;
// myUser._id = "12" :-> can not change value becuz it's a readonly property
