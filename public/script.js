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

        // If all required fields are filled and valid, proceed with form submission
        // Here you can handle form submission or any other action you require

        // Display login successful message (for demonstration)
        alert("Login successful!");

        // Reset form for fresh data entry (for demonstration)
        form.reset();
    });

    function isFormValid() {
        // Check if any required field is empty
        if (form.username.value.trim() === "" || 
            form.email.value.trim() === "" || 
            form.phone.value.trim() === "") {
            return false;
        }

        // Validate username (only allow alphabets, numbers, and special characters)
        const usernameRegex = /^[a-zA-Z0-9 !@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?]$/;
        if (!usernameRegex.test(form.username.value.trim())) {
            alert("Username should only contain alphabets, numbers, and special characters.");
            return false;
        }

        // Validate email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email.value.trim())) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Validate phone number (only allow numbers starting with 6, 7, 8, 9, or 0 and should have exactly 10 digits)
        const phoneRegex = /^[67890]\d{9}$/;
        if (!phoneRegex.test(form.phone.value.trim())) {
            alert("Please enter a valid phone number starting with 6, 7, 8, 9, or 0 and having exactly 10 digits.");
            return false;
        }

        return true; // Form is valid if all checks pass
    }
});