let buttons = document.querySelectorAll(".box");
let input = document.querySelector("#input");
let equal = document.querySelector("#equal");
let aclear = document.querySelector("#aclear");
let clear = document.querySelector("#clear");
function safeEval(expression) {
  try {
    return Function('"use strict";return (' + expression + ")")();
  } catch (e) {
    return "Error";
  }
}

console.log(buttons);
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.innerHTML);
    let attribute = btn.getAttribute("id");
    console.log(attribute);
    if (attribute == "aclear") {
      input.value = "";
    } else if (attribute == "equal") {
      input.value = safeEval(input.value); //      eval or your logic for equal
    } else if (attribute == "clear") {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += btn.innerHTML;
    }
  });
});
