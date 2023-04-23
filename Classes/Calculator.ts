import { EOperators } from "../enum/EOperators";
interface ICalcProps {
    operation: string;
    display: HTMLDivElement;
    displayFirst: HTMLDivElement;
    numbers: NodeListOf<HTMLButtonElement>;
    operators: NodeListOf<HTMLButtonElement>;
}



export default class Calculator {
    firstOperand: string;
    currentOperand: string;
    operation: EOperators | string;
    display: HTMLDivElement;
    displayFirst: HTMLDivElement;

    constructor({display, displayFirst, numbers, operation, operators}: ICalcProps) {
       this.firstOperand = "";
       this.currentOperand = "";
       this.operation = "";
       this.display = display;
       this.displayFirst = displayFirst
    }

    public updateDisplay() {
        this.displayFirst.textContent = this.firstOperand + this.operation;
        this.display.textContent = this.currentOperand;
    }

    public appendNumber(number: string): void {
        if(this.currentOperand.includes(".") && number === ".") return;
        this.currentOperand += number
        this.updateDisplay();
    }

    public calc(): void {
        let result;
        const prev = parseFloat(this.firstOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
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
   };

   public chooseOperation(operator: string) {
     if (this.currentOperand === "") return;
     if (this.firstOperand !== "") {
       this.calc();
     }
    this.operation = operator;
    this.firstOperand = this.currentOperand;
    this.currentOperand = "";
    this.updateDisplay();
    }


  public clear() {
    this.firstOperand = "";
    this.currentOperand = "";
    this.operation = "";
    this.updateDisplay();
  };

  public backspace() {
    this.currentOperand = this.currentOperand.slice(0, -1);
    this.updateDisplay();
  };

}