const input1 = document.getElementById("number-1") as HTMLInputElement;
const input2 = document.getElementById("number-2") as HTMLInputElement;
const resultPara = document.querySelector("p")!;

type NumOrString = number | string;

function add(num1: NumOrString | string, num2: NumOrString | string) {
  if (typeof num1 === "number" && num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

document.querySelector("button")?.addEventListener("click", (e) => {
  e.preventDefault();
  const firstNum = parseInt(input1.value);
  const secondNum = parseInt(input2.value);

  resultPara.innerText = add(firstNum, secondNum).toString();
});
