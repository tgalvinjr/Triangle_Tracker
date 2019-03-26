// Get form
const form = document.querySelector("#values-form");

// Get values 
const value1 = document.querySelector('input[name="value1"]');
const value2 = document.querySelector('input[name="value2"]');
const value3 = document.querySelector('input[name="value3"]');


let isValid;
// Validate input
const validateInput = function (valueA, valueB, valueC) {
    if (Number(valueA) && Number(valueB) && Number(valueC)) {
        isValid = true;
        return;
    } else {
        isValid = false;
        // template literal to allow parsing the value being validated
        alert(` ❌ You have entered "${valueA} ${valueB} ${valueC}" some of the values are not number(s) 🤔. Please TRY AGAIN with numbers only`);
    }
}

// Submit Handler
const submitHandler = function (event) {

    const valueA = value1.value;
    const valueB = value2.value;
    const valueC = value3.value;

    // Validations
    validateInput(valueA, valueB, valueC);

    if (isValid) {
        // Equilateral Triangle
        if (
            valueA === valueB &&
            valueB === valueC &&
            valueC === valueA) {
            alert(" ✔️ This is an EQUILATERAL TRIANGLE 👍");

            // Isosceles Triangle
        } else if (
            (valueA === valueB &&
                valueB !== valueC ||
                valueB === valueC &&
                valueC !== valueA ||
                valueC === valueA &&
                valueA !== valueB) && (
                valueA + valueB > valueC &&
                valueB + valueC > valueA &&
                valueA + valueC > valueB &&
                valueC + valueA > valueB &&
                valueB + valueA > valueC &&
                valueC + valueB > valueA)) {
            alert(" ✔️ This is an ISOSCELES TRIANGLE 👍");

            // Scalene Triangle
        } else if (
            valueA !== valueB &&
            valueB !== valueC &&
            valueC !== valueA &&
            valueA + valueB > valueC &&
            valueB + valueC > valueA &&
            valueA + valueC > valueB &&
            valueC + valueA > valueB &&
            valueB + valueA > valueC &&
            valueC + valueB > valueA) {
            alert(" ✔️ This is a SCALENE TRIANGLE 👍");
        } else {
            alert(`ERROR!!!! ❌ A Triangle CANNOT be formed using the values "${valueA}","${valueB}","${valueC}",🤔 Please TRY AGAIN`)
        }
    }

}
// Add submit event and handler
form.addEventListener("submit", submitHandler)
