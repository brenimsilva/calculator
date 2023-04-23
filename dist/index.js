"use strict";
import Calculator from "./Classes/Calculator.js";
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const equal = document.getElementById("equal");
const parRight = document.getElementById("sqrt");
const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");
const display = document.getElementById("display");
const displayFirst = document.getElementById("displayFirst");
const calcElements = {
    display: display,
    displayFirst: displayFirst,
    numbers: numberButtons,
    operators: operatorButtons,
    backspaceBtn: backspace,
    clearBtn: clear,
    equalBtn: equal,
    sqrtBtn: parRight
};
const calculadora = new Calculator(calcElements);
// THEME TOGGLE
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
// let isDark = false;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    //   isDark = !isDark;
};
