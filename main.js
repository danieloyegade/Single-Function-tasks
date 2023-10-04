"use strict";

const calcAverage = () => {
  while (true) {
    try {
      const input = prompt("Input a list of numbers separated by spaces");

      if (input === null) {
        // If the user cancels the prompt, break out of the loop
        break;
      }

      const numbers = input.split(" ").map(Number);

      if (numbers.some(isNaN)) {
        // If any input is not a valid number, handle the error
        throw new Error(
          "Invalid input. Please enter a list of valid numbers separated by spaces."
        );
      }

      const sum = numbers.reduce(
        (accumulator, number) => accumulator + number,
        0
      );
      const average = sum / numbers.length;

      alert(`The average is ${average}`);
      console.log(`The average is ${average}`);

      // Ask the user if they want to continue
      const continueInput = confirm("Do you want to continue?");
      if (!continueInput) {
        break; // Exit the loop if the user chooses not to continue
      }
    } catch (error) {
      // Handle the error
      console.error(error.message);
    }
  }
};

calcAverage();
