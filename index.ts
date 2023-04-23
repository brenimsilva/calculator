"use strict";
import Calculator from "./Classes/Calculator.js";

const clear = document.getElementById("clear");
const div = document.getElementById("/");
const times = document.getElementById("*");
const backspace = document.getElementById("backspace");
const minus = document.getElementById("-");
const plus = document.getElementById("+");
const equal = document.getElementById("equal");
const parLeft = document.getElementById("dot");
const parRight = document.getElementById("sqrt");

const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");

const display = document.getElementById("display");


const calculadora = new Calculator({display: });

// EVENT LISTENERS
numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    calculadora.appendNumber(item.innerText);
  });
});

operatorButtons.forEach((item) => {
  item.addEventListener("click", () => {
    calculadora.chooseOperation(item.innerText);
  });
});

equal.addEventListener("click", () => {
  calculadora.calc();
});

clear.addEventListener("click", () => {
  calculadora.clear();
});

backspace.addEventListener("click", () => {
  calculadora.backspace();
});

sqrt.addEventListener("click", () => {
  calculadora.sqrt();
});

// THEME TOGGLE
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
// let isDark = false;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  //   isDark = !isDark;
};
