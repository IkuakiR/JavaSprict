"use strice";

console.log("1");
console.log(1);
console.log(1 + 1);
console.log("1" + "1");
// const wage = 1000;
let wage = 1000;
// console.log("時給は" + wage);
console.log(`時給は${wage}`);
wage = 1200;
console.log(`時給は${wage}`);

let numA = 10;
let numB = 3;
console.log(numA + numB);
console.log(numA * numB);
console.log(numA % numB);

const num1 = document.getElementById("num1");
console.log(num1.value);

const num2 = document.getElementById("num2");
console.log(num2.value);

const btn = document.getElementById("btn");

const ans = document.getElementById("ans");

btn.addEventListener("click", () => {
    // ansのvalにnum1のvalを表示
    console.log(num1.value);
    console.log(num2.value);
    ans.value = Number(num1.value) + Number(num2.value)
});

console.log(ans.value);

