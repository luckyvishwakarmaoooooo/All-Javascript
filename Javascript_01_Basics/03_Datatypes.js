// Datatypes prefer types of data basically it is a two type 
// primitive and non-prmitive datatypes


// primitive  => it is a simple building blocks it store simple value 

// Number , String, Boolean, Null , Undefine , BigInt, Symbol,


// Non-Primitve it is a complex building block which is store complex value 
// Array, Object , RegExp , Function, Date

let string = "Aditya , 22"
let array = [1,5,6,7,10]
let number = 2345566;
let bigint = 12356748484840033n;

console.table([
    { variable: "string", value: string, typeof: typeof string },
    { variable: "array", value: array, typeof: typeof array },
    { variable: "number", value: number, typeof: typeof number },
    { variable: "bigint", value: bigint, typeof: typeof bigint }
  ]);

//   type of null is object it is sa bug of javascript
