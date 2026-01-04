 function convert() {
    let value = document.getElementById("inputValue").value;
    let type = document.getElementById("type").value;
    let result = document.getElementById("result");

    if (value === "") {
        result.innerHTML = "Please enter a value!";
        return;
    }

    value = parseFloat(value);
    let converted;

    if (type === "celsius") {
        converted = (value * 9/5) + 32;
        result.innerHTML = `${converted.toFixed(2)} °F`;
    }

    else if (type === "fahrenheit") {
        converted = (value - 32) * 5/9;
        result.innerHTML = `${converted.toFixed(2)} °C`;
    }

    else if (type === "kelvin") {
        converted = value + 273.15;
        result.innerHTML = `${converted.toFixed(2)} K`;
    }
}