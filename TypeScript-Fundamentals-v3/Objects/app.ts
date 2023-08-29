// this is not right way to make object in TS
const User = {
    name:"shahid",
    age: 19,
    isActive: true
}

function createUser({name:string,age:number,isActive:boolean}){}

createUser({name:'shahid',age: 19,isActive: true})

function createCourse():{name:string,age:number,isActive:boolean}{
    return ({name: 'typeScript',age:19,isActive:true})
}



export {}