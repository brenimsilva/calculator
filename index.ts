"use strict";
import Calculator, { ICalcProps } from "./Classes/Calculator.js";

const clear = document.getElementById("clear") as HTMLButtonElement
const backspace = document.getElementById("backspace") as HTMLButtonElement
const equal = document.getElementById("equal") as HTMLButtonElement
const parRight = document.getElementById("sqrt") as HTMLButtonElement

const numberButtons = document.querySelectorAll(".btn-number") as NodeListOf<HTMLButtonElement>;
const operatorButtons = document.querySelectorAll(".btn-operator") as NodeListOf<HTMLButtonElement>;

const display = document.getElementById("display") as HTMLDivElement;
const displayFirst = document.getElementById("displayFirst") as HTMLDivElement;

const calcElements: ICalcProps = {
    display: display,
    displayFirst: displayFirst,
    numbers: numberButtons,
    operators: operatorButtons,
    backspaceBtn: backspace,
    clearBtn: clear,
    equalBtn: equal,
    sqrtBtn: parRight
    }

const calculadora = new Calculator(calcElements);

// THEME TOGGLE
const themeToggleBtn = document.querySelector(".theme-toggler") as HTMLButtonElement;
const calculator = document.querySelector(".calculator") as HTMLDivElement;
// let isDark = false;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  //   isDark = !isDark;
};
