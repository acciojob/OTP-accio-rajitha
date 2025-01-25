//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('.code');

  inputs.forEach((input, index) => {
    input.addEventListener('input', function (e) {
      // Move to the next input field when a digit is typed
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        setTimeout(() => inputs[index + 1].focus(), 100); // Add a small delay
      }
    });

    input.addEventListener('keydown', function (e) {
      // Move to the previous input field when backspace is pressed
      if (e.key === "Backspace" && index > 0 && e.target.value === "") {
        setTimeout(() => inputs[index - 1].focus(), 100); // Add a small delay
      }
    });
  });
});
/*
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('.code');
  
  inputs.forEach((input, index) => {
    input.addEventListener('input', function (e) {
      // Move to the next input field when a digit is typed
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener('keydown', function (e) {
      // Move to the previous input field when backspace is pressed
      if (e.key === "Backspace" && index > 0 && e.target.value === "") {
        inputs[index - 1].focus();
      }
    });
  });
});
/*
const inputs = document.querySelectorAll('.code');

// Move to next input field when a number is typed
inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value !== '' && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // Focus on the previous input when backspace is pressed
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
    });
});
*/