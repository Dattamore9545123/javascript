let str="datta More";

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.trim());

console.log(str.charAt(2));

console.log(str.at(-2));

console.log(str.indexOf(4));

console.log(str.lastIndexOf());

console.log(str.includes("More"));

//startWith
console.log(str.startsWith("Datta"));

//endsWith
console.log(str.endsWith("More"));

//slice
console.log(str.slice(4,6));

//subString
console.log(str.substring(0,5));

//replace
console.log(str.replace("datta","tatta"));

//replceAll
let DM="sagar sagar sagar";
console.log(DM.replaceAll("sagar","datta"));

//split()
console.log(str.split(","));

//concat
let a="Hello";
let b="World";
console.log(a.concat("",b));


