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
// function Calculator() {
//   this.firstOperand = "";
//   this.currentOperand = "";
//   this.operation = "";
//   // UPDATE BOTH VALUES ON DISPLAY
//   this.updateDisplay = function () {
//     displayFirst.textContent = this.firstOperand + this.operation;
//     display.textContent = this.currentOperand;
//   };
//   // ADD NUMBER ON DISPLAY
//   this.appendNumber = function (number) {
//     if (this.currentOperand.includes(".") && number === ".") return;
//     this.currentOperand += number.toString();
//     this.updateDisplay();
//   };
//   // SELECT OPERATOR
//   this.chooseOperation = function (operator) {
//     if (this.currentOperand === "") return;
//     if (this.firstOperand !== "") {
//       this.calc();
//     }
//     this.operation = operator;
//     this.firstOperand = this.currentOperand;
//     this.currentOperand = "";
//     this.updateDisplay();
//   };
//   // CALC RESULT BASED ON OPERATOR
//   this.calc = function () {
//     let result;
//     let prev = parseFloat(this.firstOperand);
//     let current = parseFloat(this.currentOperand);
//     if (isNaN(prev) || isNaN(current)) return;
//     switch (this.operation) {
//       case "+":
//         result = prev + current;
//         break;
//       case "-":
//         result = prev - current;
//         break;
//       case "×":
//         result = prev * current;
//         break;
//       case "÷":
//         result = prev / current;
//         break;
//       default:
//         return;
//     }
//     this.firstOperand = "";
//     this.currentOperand = result.toString();
//     this.operation = "";
//     this.updateDisplay();
//   };
//   this.sqrt = function () {
//     this.currentOperand = Math.sqrt(this.currentOperand).toFixed(2);
//     this.updateDisplay();
//   };
//   // CLEAR DISPLAY
//   this.clear = function () {
//     this.firstOperand = "";
//     this.currentOperand = "";
//     this.operation = "";
//     this.updateDisplay();
//   };
//   // DELETE LAST INPUT
//   this.backspace = function () {
//     this.currentOperand = this.currentOperand.slice(0, -1);
//     this.updateDisplay();
//   };
// }
const calculadora = new Calculator({ display:  });
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
