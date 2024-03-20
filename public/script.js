document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const submitButton = document.getElementById("submit");

    // Add event listener to submit button
    submitButton.addEventListener("click", function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Check if any required field is empty
        if (!isFormFilled()) {
            // If any required field is empty, display the "Please fill out the required details" message
            alert("Please fill out all required details to proceed.");
            return; // Exit form submission process
        }

        // If all required fields are filled and valid, proceed with individual field validation
        // Check individual field conditions and display messages accordingly

        // Check username condition
        if (!isUsernameValid()) {
            alert("Username should only contain alphabets, numbers, and special characters.");
            return;
        }

        // Check email condition
        if (!isEmailValid()) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check phone number condition
        if (!isPhoneValid()) {
            alert("Please enter a valid phone number starting with 6, 7, 8, 9, or 0 and having exactly 10 digits.");
            return;
        }

        // If all fields are filled and passed individual validations, proceed with form submission
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
        return form.username.value.trim() !== "" || 
               form.email.value.trim() !== "" || 
               form.phone.value.trim() !== "";
    }

    function isUsernameValid() {
        // Validate username (allow alphabets, numbers, and special characters)
        const usernameRegex = /^[a-zA-Z0-9 !@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?]$/;
        return usernameRegex.test(form.username.value.trim());
    }

    function isEmailValid() {
        // Validate email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(form.email.value.trim());
    }

    function isPhoneValid() {
        // Validate phone number (only allow numbers starting with 6, 7, 8, 9, or 0 and should have exactly 10 digits)
        const phoneRegex = /^[67890]\d{9}$/;
        return phoneRegex.test(form.phone.value.trim());
    }
});