const allDisplayBtns = document.querySelectorAll(".val-display");
const calcResult = document.querySelector(".calc-result");
const btnReset = document.querySelector(".btn-reset");
const btnDelete = document.querySelector(".btn-del");
const btnEquals = document.querySelector(".btn-equals");
let calcResultContent = "";

allDisplayBtns.forEach((displayBtns) => {
  displayBtns.addEventListener("click", () => {
    calcResultContent += displayBtns.textContent;
    calcResult.textContent = calcResultContent;
  });
});

function solve() {
  try {
    let result = eval(calcResult.textContent);
    calcResult.textContent = result.toLocaleString();
  } catch (error) {
    calcResult.textContent = "Error";
    calcResultContent = "";
  }
}

function resetValues() {
  calcResult.textContent = "";
  calcResultContent = "";
}

function deleteValues() {
  let currentValue = calcResult.textContent;
  if (currentValue.length > 0) {
    calcResultContent = calcResultContent.slice(0, -1);
    calcResult.textContent = calcResultContent;
  }
}
btnReset.addEventListener("click", resetValues);
btnDelete.addEventListener("click", deleteValues);
btnEquals.addEventListener("click", solve);

// Theme change
let counter = 0;
const themeChangerContainer = document.querySelector(".theme");
const themeChanger = document.querySelector(".circle");
const html = document.querySelector("html");
const body = document.querySelector("body");
const themeNav = document.querySelector(".theme-nav");
const calcArea = document.querySelector(".calc-area");
themeChangerContainer.addEventListener("click", () => {
  counter = (counter + 1) % 3;
  themeChanger.classList.remove("circle-theme-2", "circle-theme-3");
  html.classList.remove("html-theme-2", "html-theme-3");
  body.classList.remove("body-theme-2", "body-theme-3");
  themeNav.classList.remove("theme-nav-theme-2", "theme-nav-theme-3");
  themeChangerContainer.classList.remove("theme-theme-2", "theme-theme-3");
  calcResult.classList.remove("calc-result-theme-2", "calc-result-theme-3");
  calcArea.classList.remove("calc-area-theme-2", "calc-area-theme-3");
  allDisplayBtns.forEach((btns) => {
    btns.classList.remove("val-display-theme-2", "val-display-theme-3");
  });
  btnDelete.classList.remove("btn-del-theme-2", "btn-del-theme-3");
  btnReset.classList.remove("btn-reset-theme-2", "btn-reset-theme-3");
  btnEquals.classList.remove("btn-equals-theme-2", "btn-equals-theme-3");
  if (counter === 1) {
    themeChanger.classList.add("circle-theme-2");
    html.classList.add("html-theme-2");
    body.classList.add("body-theme-2");
    themeNav.classList.add("theme-nav-theme-2");
    themeChangerContainer.classList.add("theme-theme-2");
    calcResult.classList.add("calc-result-theme-2");
    calcArea.classList.add("calc-area-theme-2");
    allDisplayBtns.forEach((btns) => {
      btns.classList.add("val-display-theme-2");
    });
    btnDelete.classList.add("btn-del-theme-2");
    btnReset.classList.add("btn-reset-theme-2");
    btnEquals.classList.add("btn-equals-theme-2");
  } else if (counter === 2) {
    themeChanger.classList.add("circle-theme-3");
    // Reset classes
    themeChanger.classList.remove("circle-theme-2");
    html.classList.remove("html-theme-2");
    body.classList.remove("body-theme-2");
    themeNav.classList.remove("theme-nav-theme-2");
    themeChangerContainer.classList.remove("theme-theme-2");
    calcResult.classList.remove("calc-result-theme-2");
    calcArea.classList.remove("calc-area-theme-2");
    allDisplayBtns.forEach((btns) => {
      btns.classList.remove("val-display-theme-2");
    });
    btnDelete.classList.remove("btn-del-theme-2");
    btnReset.classList.remove("btn-reset-theme-2");
    btnEquals.classList.remove("btn-equals-theme-2");
    // Add new classes
    html.classList.add("html-theme-3");
    body.classList.add("body-theme-3");
    themeNav.classList.add("theme-nav-theme-3");
    themeChangerContainer.classList.add("theme-theme-3");
    calcResult.classList.add("calc-result-theme-3");
    calcArea.classList.add("calc-area-theme-3");
    allDisplayBtns.forEach((btns) => {
      btns.classList.add("val-display-theme-3");
    });
    btnDelete.classList.add("btn-del-theme-3");
    btnReset.classList.add("btn-reset-theme-3");
    btnEquals.classList.add("btn-equals-theme-3");
  }
});
