//Таски на змінні

let a = 5;
let b = 8;
console.log(a*b);

let c = 8;
let d = 7;
console.log(c/d);

let e = 3;
let f = 8;
console.log(e+f);

console.log(typeof 11);
console.log(typeof true);
console.log(typeof 'Java script');
console.log(typeof '100');

let num = 1;
num += 11;
console.log(num);
num -= 11;
console.log(num);
num *= 11;
console.log(num);
num /= 11;
console.log(num);
num ++;
console.log(num);
num --;
console.log(num);

//Такси на prompt

const j = +prompt('ВВедіть число');
console.log(Math.pow(j, 2));
//console.log(a**2);

const k = +prompt('First number');
const l = +prompt('Second number');
console.log(k / l);

const m = +prompt('Enter the number of minutes');
console.log(m * 60);

const greeting = 'Hello';
let userName = prompt('Enter your name');
alert(greeting + ' ' + userName + '!');