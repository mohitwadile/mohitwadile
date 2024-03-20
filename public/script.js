document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const submitButton = document.getElementById("submit");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    // Disable submit button initially
    submitButton.disabled = true;

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

    function isFormValid() {
        // Check if any required field is empty
        return usernameInput.value.trim() !== "" && 
               emailInput.value.trim() !== "" && 
               phoneInput.value.trim() !== "";
    }
});