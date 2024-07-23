// const pi = 3.141592;
// const r = 10;
// console.log(2 * pi * r);
// console.log(pi * r * r);

// let number = 10;

// alert(number++);
// alert(++number);
// alert(number--);
// alert(--number);

// function 윤년(year) {
//   if (year % 400 === 0) return "윤년";
//   if (year % 4 === 0) return "윤년";
//   return "평년";
// }

// for (let line = 0; line < 1; line++) {
//   let stars = "";
//   for (let star = 0; star < 5; star++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// for (let line = 0; line < 5; line++) {
//   let stars = "";
//   for (let star = 0; star < 1; star++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// for (let line = 0; line < 5; line++) {
//   let stars = "";
//   for (let star = 0; star < 5; star++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// for (let line = 0; line < 5; line++) {
//   let stars = "";
//   for (let star = 0; star < line + 1; star++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// for (let line = 0; line < 5; line++) {
//   let stars = "";
//   for (let star = 0; star < 5 - line; star++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// const items = [1, 2, 3, 4];
// console.log(items);
// const index = items.indexOf(3);
// console.log(index);
// items.splice(index, 1);
// console.log(items);
// console.log(items.indexOf(3));
// items.splice(2, 0, "asd");
// console.log(items);

// for (const i in items) {
//   console.log(`${i} --> ${items[i]}`);
// }

// for (const item of items) {
//   console.log(`${item}`);
// }

// for (let i = items.length - 1; i >= 0; i--) {
//   console.log(i, items[i]);
// }
// const str = "wtT";
// console.log(str.length);
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toUpperCase()) {
//     str.slice(i, 0, 1);
//     console.log(str);
//   }
// }

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   input = [line];
// }).on("close", function () {
//   str = input[0];
//   const regex = /[A-Z]/;
//   // const array = []
//   // for (let i = 0; i < str.length; i++) {
//   //     regex.test(str[i]) ? array.push(str[i].toLowerCase()) : array.push(str[i].toUpperCase());
//   // }
//   // console.log(array.join(''))
//   console.log(
//     [...str]
//       .map((v) => (regex.test(v) ? v.toLowerCase() : v.toUpperCase()))
//       .join("")
//   );
// });

let numbers = "0123456789";
numbers = numbers
  .split("")
  .map((v) => parseInt(v))
  .filter((v) => v % 2 === 0)
  .map((v) => v * v);
console.log(numbers);

// numbers
//   .filter((v) => v % 2 === 0)
//   .map((v) => v * v)
//   .forEach((v) => console.log(v));

// numbers = numbers.map((v) => v * v);
// numbers.forEach(console.log);
// numbers = numbers.filter((v) => v % 2 === 0);

let str1 = "123  ";
let str2 = "12";

let ans = [str1, str2];
if (str1.length >= 1 && str2.length <= 10) {
  ans = ans.map((v) => v.trim()).join("");
  console.log(ans);
}

let input = "abcde";
input = input.split("").forEach((v) => console.log(v));

let my_string = "Program29b8UYP";
console.log(my_string.length);
let overwrite_string = "merS123";
let string = 7;

let output = my_string.slice(0, string);
let output2 = my_string.slice(string + overwrite_string.length);

const result = output + overwrite_string + output2;
console.log(result);
console.log(output, output2);

/* HelloWorld */

// console.log(new product("cheese", 5).n);
