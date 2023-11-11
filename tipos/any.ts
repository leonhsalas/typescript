(() => {

let avenger: any = 123;
const exists = false;
let power;

avenger = 'Dr Strange';
// console.log( avenger.charAt(0) );
console.log( (avenger as string).charAt(8) );

avenger = 150.23256415;
console.log ( <number>avenger.toFixed(2) );


console.log(exists);
console.log(power);





})()