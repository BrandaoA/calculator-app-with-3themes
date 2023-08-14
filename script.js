const userInput = document.getElementById("screen");
const firstTheme = document.getElementById("number1");
const secondTheme = document.getElementById("number2");
const thirdTheme = document.getElementById("number3");
const numbers = document.querySelectorAll(".number");
const grayTheme = document.querySelector(".gray-theme");
const lightTheme = document.querySelector(".light-theme");
const theme = document.querySelector(".theme");
const heading = document.querySelector(".heading");
const text = document.querySelector(".change");

/*for theme change*/
function changeTheme(val) {
  if (val===2) {
    numbers.forEach(numbers => {
      numbers.classList.add("active1");
    });
    document.body.classList.add("gray-theme");
    theme.classList.add("active1");
    heading.classList.add("active1");
    text.classList.add("active1");
    userInput.classList.add("active1");
  } else {
    numbers.forEach(numbers => {
      numbers.classList.remove("active1");
    });
    document.body.classList.remove("gray-theme");
    theme.classList.remove("active1");
    heading.classList.remove("active1");
    text.classList.remove("active1");
    userInput.classList.remove("active1");
  }

  if (val===3) {
    numbers.forEach(numbers => {
      numbers.classList.add("new");
    });
    document.body.classList.add("light-theme");
    theme.classList.add("active2");
    heading.classList.add("new");
    text.classList.add("new");
    userInput.classList.add("new");
  } else {
    numbers.forEach(numbers => {
      numbers.classList.remove("new");
    });
    document.body.classList.remove("light-theme");
    theme.classList.remove("active2");
    heading.classList.remove("new");
    text.classList.remove("new");
    userInput.classList.remove("new");
  }
}


/*for the mathematics*/
let calculation = " ";

function calculate(value) {
  calculation += value;
  userInput.value = calculation;
}



