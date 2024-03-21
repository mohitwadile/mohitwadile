document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const submitButton = document.getElementById("submit");

    // Add event listener to submit button
    submitButton.addEventListener("click", function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Check if any required field is empty
        if (!isFormFilled()) {
            // If any required field is empty, display the "Please fill out required details" message
            alert("Please fill out all required details to proceed.");
            return; // Exit form submission process
        }

        // If all required fields are filled and valid, proceed with individual field validation
        // Check individual field conditions and display messages accordingly

        // Check username condition
        if (!isUsernameValid()) {
            return; // No need to display alert message if username condition is not met
        }

        // Check email condition
        if (!isEmailValid()) {
            return; // No need to display alert message if email condition is not met
        }

        // Check phone number condition
        if (!isPhoneValid()) {
            return; // No need to display alert message if phone number condition is not met
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
        // Validate username (combination of alphabets, numbers, and dot character)
        const usernameRegex = /^[a-zA-Z0-9.]+$/;
        if (!usernameRegex.test(form.username.value.trim())) {
            alert("Please enter a valid username." ,"Note: Username should contain at least one alphabet and a number.");
            return false;
        }
        return true;
    }

    function isEmailValid() {
        // Validate email address (standard email address format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email.value.trim())) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    }

    function isPhoneValid() {
        // Validate phone number (allow optional "0" before digits 6-9 and should have exactly 10 digits)
        const phoneRegex = /^(0?[6789]\d{9})$/;
        if (!phoneRegex.test(form.phone.value.trim())) {
            alert("Please enter a valid phone number.");
            return false;
        }
        return true;
    }
});