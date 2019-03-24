var form = document.querySelector("#values-form");
var submitHandler = function(event) {
    event.preventDefault();
    console.log("Submitted")

}

form.addEventListener("submit", submitHandler);