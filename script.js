//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('.code');

  inputs.forEach((input, index) => {
    // Handle typing forward
    input.addEventListener('input', function (e) {
      const value = e.target.value;

      if (value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    // Handle backspace
    input.addEventListener('keydown', function (e) {
      if (e.key === "Backspace") {
        if (input.value === "") {
          // Move focus to the previous field
          if (index > 0) {
            inputs[index - 1].focus();
          }
        } else {
          // Clear current input value
          input.value = "";
        }
      }
    });
  });
});
/*
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('.code');

  inputs.forEach((input) => {
    input.addEventListener('input', function (e) {
      if (e.target.value) {
        e.target.nextElementSibling?.focus();
      }
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === "Backspace") {
        e.target.previousElementSibling?.focus();
      }
    });
  });
});  /*
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('.code');

  inputs.forEach((input, index) => {
    input.addEventListener('keyup', function (e) {
      if (e.target.value && index < inputs.length - 1) {
        setTimeout(() => inputs[index + 1].focus(), 1000);
      }
      if (e.key === "Backspace" && index > 0) {
        setTimeout(() => inputs[index - 1].focus(), 1000);
      }
    });
  });
});  /*
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('.code');

  inputs.forEach((input, index) => {
    input.addEventListener('input', function (e) {
     
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        setTimeout(() => inputs[index + 1].focus(), 100); 
      }
    });

    input.addEventListener('keydown', function (e) {
   
      if (e.key === "Backspace" && index > 0 && e.target.value === "") {
        setTimeout(() => inputs[index - 1].focus(), 100);
      }
    });
  });
});  
/*
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('.code');

  inputs.forEach((input, index) => {
    input.addEventListener('input', function (e) {
      // Move to the next input field when a digit is typed
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        setTimeout(() => inputs[index + 1].focused(), 100); // Add a small delay
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