const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialChars = [ "%", "*", "/", "-", "+", "=" ];

let output = "";

// Add event listener to buttons call calculat() on clic
buttons.forEach((button) => {
  // button clic listener calls claculate() with dataset value as argument

  button.addEventListener("click", (e) => calculat(e.target.dataset.value));
});

const calculat = (btnVlaue) => {
  if (btnVlaue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnVlaue === "AC") {
    output = "";
  } else if (btnVlaue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnVlaue)) {
      return;
    }

    output += btnVlaue;
  }
  display.value = output;
};