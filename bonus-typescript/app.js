"use strict";
var _a;
const input1 = document.getElementById("number-1");
const input2 = document.getElementById("number-2");
const resultPara = document.querySelector("p");
function add(num1, num2) {
    return num1 + num2;
}
(_a = document.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
    e.preventDefault();
    const firstNum = parseInt(input1.value);
    const secondNum = parseInt(input2.value);
    resultPara.innerText = add(firstNum, secondNum).toString();
});
