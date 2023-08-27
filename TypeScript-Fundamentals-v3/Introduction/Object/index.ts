// Object 

//  in general, object type are defined by:

// the  names of the properties that are (or may be) present

//  the types of those proerties

// for example, if we had the consept of a car like "2002 Toyota Corolla" eith properties:

// make : the manufacturer(in this case, "Toyato")

// model :the particular prodduct (in this case, "corolla")
//  year: the "moel year" of the product(in this case,2002)

// we could crete a javaScript object to represent this information

{
    make: "Toyato"
    model: "Corolla"
    year: 2002
}

// so the type would be describe this Object;s structure:

{
    // make: string
    // model: string
    // year: number

}

let car: {
    make: string
    model: string
    year: number
}


// Optional Properties  

// what if we take our cr example a bit further by adding a fourth propery that's only present somtimes?

// make  -> always present    string type
// model  -> always present    string type
// year  -> always present    number type

// chargeVoltage  -> sometime present   number type (not present unless car is electric)

// we can state that property is optional using the [ ? ] Operator:

// function printCar(car: {
//     make: string
//     model: string
//     year: number
//     chargeVoltage?: number                      // look at this line we use ? to telling number || undefined    we
//   }) {
//     let str = `${car.make} ${car.model} (${car.year})`
//     // car.chargeVoltage
             
//   (property) chargeVoltage?: number | undefined
//     if (typeof car.chargeVoltage !== "undefined")
//       str += `// ${car.chargeVoltage}v`
                            
//   (property) chargeVoltage?: number
//     console.log(str)
//   }

