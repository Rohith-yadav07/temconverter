function convertTemperature() {
    const degrees = parseFloat(document.getElementById("degrees").value);
    const type = document.getElementById("type").value;

    let result;

    if (type === "fahrenheit") {
      result = (degrees - 32) * (5 / 9);
    } 
    else if (type === "celsius") {
      result = (degrees * 9 / 5) + 32;
    }
    document.getElementById("result").textContent = result.toFixed(4) + " °" + (type === "fahrenheit" ? "C" : "F");
  }  
