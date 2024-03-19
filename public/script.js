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
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Check if submit button is disabled (i.e., form is not valid)
        if (submitButton.disabled) {
            // If submit button is disabled, display error message
            alert("Please fill in all required fields.");
            return; // Exit form submission process
        }

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
});