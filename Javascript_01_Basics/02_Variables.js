//  variable is a momory conatainert to store a data there are three types of variable 
// let =  it is block scoped we can reassign the value but we can not redecler 
// var it is function scope we can reassign and redeclear its valve ;
// const it is block level scope we can not reassign and redeclear its value 

// Example var


var name = "aditya"
console.log("Name: " + name);

function hello(){
    console.log(name)
}
hello();


// Example let


function value(){
let price = 200;
    console.log("price" + price);
}
value();

// console.log("price:"+ price);   note: price not is not define due to 


// Example const
const percent = 23.366;
// percent = 23.66   note: we can not reassign and redeclear its value

console.log("percent"+ percent)
