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