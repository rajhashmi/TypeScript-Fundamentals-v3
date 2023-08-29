
type User = {
    name:string;
    age:number;
    isAcrive:boolean
}

function createUser(user:User){
    return ({name:"",age:19,isAcrive:true})
}
createUser({name:"",age:19,isAcrive:true})


type Users = {
    readonly _id: string  // using readonly property
    name:string;
    age: number;
    isActive: boolean
    businessCard?: number 
}

let myUser:Users = {
    _id:'123',
    name: "s",
    age: 19,
    isActive:true
}



myUser.age = 15
// myUser._id = "12" :-> can not change value becuz it's a readonly property

export{}