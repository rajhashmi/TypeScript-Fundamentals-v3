function sum(num1:number,num2:number):number{
    return num1 + num2
}
let add = sum(1,2);



function getUpper(val:string):string{
    return val.toUpperCase()
}
let capitilize = getUpper("shahid hashmi");


// doing same with arrow function
const getHello = (name:string):string => {
    return ""
}



function signUpUser(name:string,isPaid:boolean,age:number):{}{
    return ({name,isPaid,age})
}
let information = signUpUser("shahid",true,19)
console.log(information);

let loginUser = (name:string,age:number,isPaid:boolean = false):{} => {
    return ({name,age,isPaid})
}
let loginUserInformation = loginUser("shahid",19)
console.log(loginUserInformation);


// const mySkils = ['HTML','CSS','JavaScript','TypeScript'];
const mySkils = ['HTML','CSS',19,true];

// TS is smart it will automatic understand what kind of type will be in an array
let mySkils1 = mySkils.map((e)=>{
    return `my skills is ${e}`
    
})
// even we can define explicit also but no need this beciz TS is smart to figure it out 
let mySkils2 = mySkils.map((e:string|boolean|number)=>{
    return `my skills is ${e}`
    
})
let mySkils3 = mySkils.map((e:string|boolean|number):string =>{
    return `my skills is ${e}`
    
})






//  this type function will make problem ("to return like this or this")

function getValue(myVal:number){
    if (myVal > 5) {
        return true
    }
    return "200 K"
}


export {}