"use strict";
const arr = new Array();
console.log(arr);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
console.log(arr.length);

//連想配列
// const arr2 = [];
// arr2["name"] = "rin"
// arr2["age"] = "21"
// arr2["sex"] = "male"
// console.log(arr2);

let ans = 0;
// ans = arr[0] + arr[1] + arr[2];

// for (1, 2, 3){ }
// 1.カウンタ変数 2.繰り返す条件 3.カウンタを増やす(減らす)
for (let i = 0; i < arr.length; i++){
    // 繰り返し条件が満たされるまで内湯を繰り返す
    console.log(`${i + 1}回実施`);
    ans = ans + arr[i];
    console.log(`ansの値は${ans}です`);
}
console.log(ans);

const btn = document.getElementsByClassName("btn");
console.log(btn);

// btn[0].addEventListener("click", () => {
//     console.log("hello");
// });
// btn[1].addEventListener("click", () => {
//     console.log("hello");
// });
// btn[2].addEventListener("click", () => {
//     console.log("hello");
// });
console.log(btn.length);
const text = document.getElementById("text");

for ( let j = 0; j < btn.length; j++) {
    btn[j].addEventListener("click", (evt) => {
        console.log(evt.target);
        text.innerText = `${evt.target.innerText}が押されました`;
    });
}