"use strict";

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

const cal = document.getElementById("cal");

btn.addEventListener("click", () => {
    // ansのvalにnum1のvalを表示
    // console.log("cal:", cal.value);
    console.log("num1:", num1.value);
    console.log("num2:" + num2.value);
    // ans.value = Number(num1.value) + Number(num2.value)
    if (cal.value == "add") {
        ans.value = Number(num1.value) + Number(num2.value);
    }
    else if (cal.value == "sub") {
        ans.value = Number(num1.value) - Number(num2.value);
    }
    else if (cal.value == "mul") {
        ans.value = Number(num1.value) * Number(num2.value);
    }
    else if (cal.value == "divi") {
        if (Number(num1.value) == 0) {
            ans.value = "divisor cannot be 0";
            // console.log(ans.value);
        }else {
            ans.value = Number(num1.value) / Number(num2.value);
            // console.log(ans.value);
        }
    }
    else {

    }
});