form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate the form fields
    const isUsernameValid = usernameInput.value.trim() !== "";
    const isEmailValid = emailInput.value.trim() !== "";
    const isPhoneValid = phoneInput.value.trim() !== "";

    // Check if any required field is empty
    if (!isUsernameValid || !isEmailValid || !isPhoneValid) {
        // If any required field is empty, display error message
        alert("Please fill in all required fields.");
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