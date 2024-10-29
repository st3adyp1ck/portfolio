<<<<<<< HEAD
'use strict';

// Exercise: Create a Simple Calculator Function
// Objective: Write a function that performs basic arithmetic operations (addition, subtraction, multiplication, division) based on the user’s input.

// Instructions:
// Function Name: Create a function named calculator.

// Parameters: The function should take three parameters:

// num1: The first number.
// num2: The second number.
// operation: A string that specifies the operation to perform (e.g., "add", "subtract", "multiply", "divide").
// Return the Result: The function should return the result of the operation between num1 and num2.

// Handle Basic Operations:

// If operation is "add", return the sum of num1 and num2.
// If operation is "subtract", return the difference between num1 and num2.
// If operation is "multiply", return the product of num1 and num2.
// If operation is "divide", return the quotient of num1 divided by num2.
// Edge Cases:

// Ensure the function handles division by zero properly by returning a message like "Cannot divide by zero" if num2 is zero and the operation is "divide".
// If the operation is not one of the specified strings ("add", "subtract", "multiply", "divide"), return "Invalid operation".
// Example Usage:
// javascript
// Copy code
// console.log(calculator(5, 3, "add")); // Should return 8
// console.log(calculator(10, 4, "subtract")); // Should return 6
// console.log(calculator(7, 2, "multiply")); // Should return 14
// console.log(calculator(20, 5, "divide")); // Should return 4
// console.log(calculator(10, 0, "divide")); // Should return "Cannot divide by zero"
// console.log(calculator(5, 3, "modulus")); // Should return "Invalid operation"
// Steps to Implement:
// Define the calculator function.
// Inside the function, use if or switch statements to check the value of operation.
// Based on the operation, perform the corresponding arithmetic and return the result.
// Handle the edge cases as described.
// This exercise will help you get comfortable with writing basic functions, handling conditions, and working with parameters and return values in JavaScript. Give it a try!

function calculator(num1, num2, operation) {
  if (
    operation === 'add' ||
    operation === 'subtract' ||
    operation === 'multiply' ||
    operation === 'divide'
  ) {
    if (operation === 'add') {
      return num1 + num2;
    } else if (operation === 'subtract') {
      return num1 - num2;
    } else if (operation === 'multiply') {
      return num1 * num2;
    } else if (operation === 'divide') {
      return num2 !== 0 ? num1 / num2 : console.log('Cannot Divide By 0');
    }
  } else {
    console.log('Invalid Operation');
  }
}

console.log(calculator(10, 5, 'add'));
=======
'use strict';

// Exercise: Create a Simple Calculator Function
// Objective: Write a function that performs basic arithmetic operations (addition, subtraction, multiplication, division) based on the user’s input.

// Instructions:
// Function Name: Create a function named calculator.

// Parameters: The function should take three parameters:

// num1: The first number.
// num2: The second number.
// operation: A string that specifies the operation to perform (e.g., "add", "subtract", "multiply", "divide").
// Return the Result: The function should return the result of the operation between num1 and num2.

// Handle Basic Operations:

// If operation is "add", return the sum of num1 and num2.
// If operation is "subtract", return the difference between num1 and num2.
// If operation is "multiply", return the product of num1 and num2.
// If operation is "divide", return the quotient of num1 divided by num2.
// Edge Cases:

// Ensure the function handles division by zero properly by returning a message like "Cannot divide by zero" if num2 is zero and the operation is "divide".
// If the operation is not one of the specified strings ("add", "subtract", "multiply", "divide"), return "Invalid operation".
// Example Usage:
// javascript
// Copy code
// console.log(calculator(5, 3, "add")); // Should return 8
// console.log(calculator(10, 4, "subtract")); // Should return 6
// console.log(calculator(7, 2, "multiply")); // Should return 14
// console.log(calculator(20, 5, "divide")); // Should return 4
// console.log(calculator(10, 0, "divide")); // Should return "Cannot divide by zero"
// console.log(calculator(5, 3, "modulus")); // Should return "Invalid operation"
// Steps to Implement:
// Define the calculator function.
// Inside the function, use if or switch statements to check the value of operation.
// Based on the operation, perform the corresponding arithmetic and return the result.
// Handle the edge cases as described.
// This exercise will help you get comfortable with writing basic functions, handling conditions, and working with parameters and return values in JavaScript. Give it a try!

function calculator(num1, num2, operation) {
  if (
    operation === 'add' ||
    operation === 'subtract' ||
    operation === 'multiply' ||
    operation === 'divide'
  ) {
    if (operation === 'add') {
      return num1 + num2;
    } else if (operation === 'subtract') {
      return num1 - num2;
    } else if (operation === 'multiply') {
      return num1 * num2;
    } else if (operation === 'divide') {
      return num2 !== 0 ? num1 / num2 : console.log('Cannot Divide By 0');
    }
  } else {
    console.log('Invalid Operation');
  }
}

console.log(calculator(10, 5, 'add'));
>>>>>>> bee64ba3e567f7c528c16cf5b9ab0ab0f9135053
