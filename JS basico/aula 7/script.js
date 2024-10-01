//               01234567
let umaString = "Um texto."
// let umaString = "Um \"texto\" "

//console.log(umaString[4]);
//console.log(umaString.charAt(6));
console.log(umaString.concat(' em', ' um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('Um'));
console.log(umaString.lastIndexOf('m'));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[x]/));
console.log(umaString.replace(/um/, 'outra'));
console.log(umaString.length);
console.log(umaString.slice(3,8));
console.log(umaString.slice(-6,-1));
console.log(umaString.split('t'));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
