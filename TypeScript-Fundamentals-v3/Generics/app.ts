function acceptSameReturnSame<Type>(value:Type):Type{
    return value
}
let generics = acceptSameReturnSame(1)
console.log(generics);

export {}
