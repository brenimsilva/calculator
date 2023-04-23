export default class Calculator {
    constructor({ display, displayFirst, numbers, operation, operators }) {
        this.firstOperand = "";
        this.currentOperand = "";
        this.operation = "";
        this.display = display;
        this.displayFirst = displayFirst;
    }
    updateDisplay() {
        this.displayFirst.textContent = this.firstOperand + this.operation;
        this.display.textContent = this.currentOperand;
    }
    appendNumber(number) {
        if (this.currentOperand.includes(".") && number === ".")
            return;
        this.currentOperand += number;
        this.updateDisplay();
    }
    calc() {
        let result;
        const prev = parseFloat(this.firstOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current))
            return;
        switch (this.operation) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "×":
                result = prev * current;
                break;
            case "÷":
                result = prev / current;
                break;
            default:
                return;
        }
        this.firstOperand = "";
        this.currentOperand = result.toString();
        this.operation = "";
        this.updateDisplay();
    }
    ;
    chooseOperation(operator) {
        if (this.currentOperand === "")
            return;
        if (this.firstOperand !== "") {
            this.calc();
        }
        this.operation = operator;
        this.firstOperand = this.currentOperand;
        this.currentOperand = "";
        this.updateDisplay();
    }
    clear() {
        this.firstOperand = "";
        this.currentOperand = "";
        this.operation = "";
        this.updateDisplay();
    }
    ;
    backspace() {
        this.currentOperand = this.currentOperand.slice(0, -1);
        this.updateDisplay();
    }
    ;
}
