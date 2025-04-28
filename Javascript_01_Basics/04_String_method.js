// string length method
// return the length of a string

let str = "INFOBEANS"
let strlength = str.length;
console.log(strlength);

// string toUpperCase method method
// convert a string to uppercase

let str2 = "infobeans"
console.log(str2.toUpperCase())
 
// string toLowerCase method
// convert a string into a lowercase

let str3 = "FOUNDATION"
console.log(str3.toLowerCase());

// string trim method
// javascript trim method remove white space from both end of a string

let str4 = "   Hello World!   "
console.log(str4.trim())
console.log(str4.length)

// slice method
// slice method extract a part of a string method changing orignal array

let str5 = "hypertext markup language"
let res = str5.slice(2 , 6)
console.log(res)

// substring
// substirng method extract a part of a string but can't accept negative value;

let str6 = "javascript"
console.log(str6.substring(3,8));


// replace method
// javascript replace method replace a specific part of a string with another value 

let str7 = "Hey Doremon"
console.log(str7.replace("Doremon", "Sizuka"));

// replaceAll method 
// javascript replaceaAll method replace all matching value of string

let str8 = "hey man hey man man hey"
console.log(str8.replaceAll("hey" , "hello"))

// charAt()
// javascript charAt method return the character at a specific index 
let str9 = "jaipur"
console.log(str9.charAt(2));

// indexOf method
// javascript indexOf method return the first index where the specified value is found 
 let str10 = "jaipur indore"
 console.log(str10.indexOf("indore"))

//  includes method
// javascript include method always return boolean value if given value is present inside
// a string it return true if is is not availabel it return false

let str11 = " indore bhopal jabalpur "
console.log(str11.includes("rajghar"))
console.log(str11.includes("indore"))

// split method
// javascript split method split a string into a array 

let str12 = "modi , yogi, saha"
console.log(str12.split())

// concat method
// javascript concat methdo joins two or more string
 let str13 = " dobal"
 console.log(str12.concat(str13));

// repeat methhod
// javascript reapeat method return a newstring with specifid copies of number

let str14 = "radha"
let res1 = str14.repeat(7)
console.log(res1)
console.log(str14)

// pad start method of the string
let str15 = "aditya"
console.log(str15.padStart(12, "softweredeveloper"))