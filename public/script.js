document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const submitButton = document.getElementById("submit");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    // Disable submit button initially
    submitButton.disabled = true;

    // Add event listeners to input fields
    usernameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    phoneInput.addEventListener("input", validateForm);

    // Add event listener to submit button
    submitButton.addEventListener("click", function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Validate form fields
        if (form.checkValidity()) {
            // If form is valid, display login successful message
            alert("Login successful!");

            // Reset form for fresh data entry
            form.reset();

            // Disable submit button after successful submission
            submitButton.disabled = true;
        } else {
            // If form is invalid, show alert to fill out required details
            alert("Please fill out all required details.");
        }
    });

    function validateForm() {
        // Check if all required fields are filled
        submitButton.disabled = !form.checkValidity();
    }
});