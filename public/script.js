document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const submitButton = document.getElementById("submit");

    // Disable submit button initially
    submitButton.disabled = true;

    // Add event listener to submit button
    submitButton.addEventListener("click", function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Check if the form is valid
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

    // Add event listener to form for input validation
    form.addEventListener("input", function() {
        // Enable or disable submit button based on form validity
        submitButton.disabled = !form.checkValidity();
    });
});