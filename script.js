let lastInput = false;

      function appendToDisplay(value) {
        let display = document.getElementById("display");
        if (lastInput && !isNaN(value)) {
          display.value = value;
        } else {
          display.value += value;
        }
        lastInput = false;
      }

      function clearDisplay() {
        document.getElementById("display").value = " ";
        lastInput = false;
      }

      function deleteLast() {
        let currentValue = document.getElementById("display").value;
        document.getElementById("display").value = currentValue.slice(0, -1);
        lastInput = true;
      }

      function calculateResult() {
        let display = document.getElementById("display");
        try {
          display.value = eval(display.value);
          lastInput = true;
        } catch (error) {
          display.value = "Error";
          lastInput = true;
        }
      }