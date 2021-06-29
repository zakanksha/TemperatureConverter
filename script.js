var calculateTemp = () => {
    const input = document.getElementById("number").value;
    const tempSelected = document.getElementById("temp_diff");
    const selectedValue = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (celsius) => {
      let fahrenheit = Math.round((celsius * 9) / 5 + 32);
      return fahrenheit;
    };
    const fahToCel = (fahrenheit) => {
      let celsius = Math.round(((fahrenheit - 32) * 5) / 9);
      return celsius;
    };

    let result;
    if (selectedValue == "cel") {
      result = celToFah(input);
      document.getElementById("resultValue").innerHTML = `${result}° Fahrenheit`;
    } else {
      result = fahToCel(input);
      document.getElementById("resultValue").innerHTML = `${result}° Celsius`;
    }
  };
