document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const submitButton = document.getElementById("submit");

    // Add event listener to submit button
    submitButton.addEventListener("click", function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Check if any required field is empty and display corresponding error message
        if (!isFormFilled()) {
            return; // Exit form submission process
        }

        // If all required fields are filled and valid, proceed with form submission
        // Here you can handle form submission or any other action you require

        // Display login successful message (for demonstration)
        alert("Login successful!");

        // Reset form for fresh data entry (for demonstration)
        form.reset();
    });

    function isFormFilled() {
        let allFieldsFilled = true;

        // Check if any required field is empty and display corresponding error message
        if (form.username.value.trim() === "") {
            alert("Please enter a username.");
            allFieldsFilled = false;
        }

        if (form.email.value.trim() === "") {
            alert("Please enter an email address.");
            allFieldsFilled = false;
        }

        if (form.phone.value.trim() === "") {
            alert("Please enter a phone number.");
            allFieldsFilled = false;
        }

        return allFieldsFilled; // Return false if any required field is empty
    }
});