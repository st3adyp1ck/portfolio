"use strict";

document.getElementById("calculateBtn").onclick = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const resultElement = document.getElementById("result");

  if (num1 === "" || num2 === "") {
    resultElement.textContent = "ERROR: EMPTY FIELDS: PLEASE CORRECT";
    resultElement.classList.add("error"); // Add error class
  } else {
    resultElement.textContent = `Total: ${Number(num1) + Number(num2)}`;
    resultElement.classList.remove("error"); // Remove error class
  }
};
