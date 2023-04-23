export default class Calculator {
    constructor({ display, displayFirst, numbers, operators, backspaceBtn, clearBtn, equalBtn, sqrtBtn }) {
        this.firstOperand = "";
        this.currentOperand = "";
        this.operation = "";
        this.display = display;
        this.displayFirst = displayFirst;
        this.equalBtn = equalBtn;
        this.sqrtBtn = sqrtBtn;
        this.clearBtn = clearBtn;
        this.backspaceBtn = backspaceBtn;
        numbers.forEach((item) => {
            item.addEventListener("click", () => {
                this.appendNumber(item.innerText);
            });
        });
        operators.forEach((item) => {
            item.addEventListener("click", () => {
                this.chooseOperation(item.innerText);
            });
        });
        this.equalBtn.addEventListener("click", () => {
            this.calc();
        });
        this.clearBtn.addEventListener("click", () => {
            this.clear();
        });
        this.backspaceBtn.addEventListener("click", () => {
            this.backspace();
        });
        this.sqrtBtn.addEventListener("click", () => {
            this.sqrt();
        });
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
    sqrt() {
        this.currentOperand = Math.sqrt(parseInt(this.currentOperand)).toFixed(2);
        this.updateDisplay();
    }
    ;
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
