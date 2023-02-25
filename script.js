let $ = document;
let FirstNumber = $.querySelector(".FirstNumber");
let SecondNumber = $.querySelector(".SecondNumber");
let btn = $.querySelector(".btn");
let showResult = $.querySelector(".showResult");

btn.addEventListener("click", () => {
  let receiveNum1 = Number(FirstNumber.value)
  let receiveNum2 = Number(SecondNumber.value)

  if (receiveNum1 % 2 === 0) {
    while (receiveNum1 < receiveNum2) {
      prompt(receiveNum1)
      receiveNum1 += 2;
    }
  } else {
    receiveNum1++;
    while (receiveNum1 < receiveNum2) {
      prompt(receiveNum1)
      receiveNum1 += 2;
    }
  }
});