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

        // Check if any required field is empty
        if (!isFormValid()) {
            // If any required field is empty, display error message
            alert("Please fill out all required details.");
            return; // Exit form submission process
        }

        // If all required fields are filled, proceed with form submission

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        // Display login successful message
        alert("Login successful!");

        // Reset form for fresh data entry
        form.reset();

        // Disable submit button after successful submission
        submitButton.disabled = true;
    });

    function validateForm() {
        // Enable or disable submit button based on form validity
        submitButton.disabled = !form.checkValidity();
    }

    function isFormValid() {
        // Check if all required fields are filled
        return usernameInput.value.trim() !== "" && 
               emailInput.value.trim() !== "" && 
               phoneInput.value.trim() !== "";
    }
});