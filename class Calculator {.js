class Calculator {
    /**
     * Constructor for the Calculator class.
     */
    constructor() {
        // No specific initialization needed for the calculator
    }
 
    /**
     * Adds two numbers.
     *
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The sum of num1 and num2.
     */
    add(num1, num2) {
        return num1 + num2;
    }
 
    /**
     * Subtracts two numbers.
     *
     * @param {number} num1 - The number to subtract from.
     * @param {number} num2 - The number to subtract.
     * @returns {number} The result of num1 - num2.
     */
    subtract(num1, num2) {
        return num1 - num2;
    }
 
    /**
     * Multiplies two numbers.
     *
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The product of num1 and num2.
     */
    multiply(num1, num2) {
        return num1 * num2;
    }
 
    /**
     * Divides two numbers.
     *
     * @param {number} num1 - The dividend.
     * @param {number} num2 - The divisor.
     * @returns {number} The result of num1 / num2.
     * @throws {Error} Throws an error if division by zero is attempted.
     */
    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
    }
}
 
// Usage Example for Calculator
 
const calculator = new Calculator();
 
// Performing calculations
const sumResult = calculator.add(5, 3);
console.log(`5 + 3 = ${sumResult}`);
 
const differenceResult = calculator.subtract(10, 4);
console.log(`10 - 4 = ${differenceResult}`);
 
const productResult = calculator.multiply(6, 7);
console.log(`6 * 7 = ${productResult}`);
 
try {
    const divisionResult = calculator.divide(15, 3);
    console.log(`15 / 3 = ${divisionResult}`);
} catch (error) {
    console.error(error.message);
}