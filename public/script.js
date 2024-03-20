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

    function validateForm() {
        const isUsernameValid = usernameInput.value.trim() !== "";
        const isEmailValid = emailInput.value.trim() !== "";
        const isPhoneValid = phoneInput.value.trim() !== "";

        submitButton.disabled = !(isUsernameValid && isEmailValid && isPhoneValid);

        // Log validation status
        console.log("Username: ", isUsernameValid);
        console.log("Email: ", isEmailValid);
        console.log("Phone: ", isPhoneValid);
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate the form fields
        const isUsernameValid = usernameInput.value.trim() !== "";
        const isEmailValid = emailInput.value.trim() !== "";
        const isPhoneValid = phoneInput.value.trim() !== "";

        // Check if any required field is empty
        if (!isUsernameValid || !isEmailValid || !isPhoneValid) {
            // If any required field is empty, display error message in console
            console.log("Please fill in all required fields.");
            return; // Exit form submission process
        }

        // If all required fields are filled, proceed with form submission

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        // Display login successful message in console
        console.log("Login successful!");

        // Reset form for fresh data entry
        form.reset();

        // Disable submit button after successful submission
        submitButton.disabled = true;
    });
});