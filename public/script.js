document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const submitButton = document.getElementById("submit");

    // Add event listener to submit button
    submitButton.addEventListener("click", function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Check if any required field is empty
        if (!isFormFilled()) {
            // If any required field is empty, display the "Please fill out all required details to proceed" message
            alert("Please fill out all required details to proceed.");
            return; // Exit form submission process
        }

        // If all required fields are filled and valid, proceed with form submission
        // Here you can handle form submission or any other action you require

        // Display login successful message (for demonstration)
        if (confirm("Do you want to submit the form?")) {
            alert("Login successful!");
            // Reset form for fresh data entry (for demonstration)
            form.reset();
        }
    });

    function isFormFilled() {
        // Check if any required field is empty
        return form.username.value.trim() !== "" &&
               form.email.value.trim() !== "" &&
               form.phone.value.trim() !== "";
    }
});