document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const submitButton = document.getElementById("submit");

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
        // Here you can handle form submission or any other action you require

        // Display login successful message (for demonstration)
        alert("Login successful!");

        // Reset form for fresh data entry (for demonstration)
        form.reset();
    });

    function isFormValid() {
        // Check if any required field is empty
        return form.username.value.trim() !== "" && 
               form.email.value.trim() !== "" && 
               form.phone.value.trim() !== "";
    }
});