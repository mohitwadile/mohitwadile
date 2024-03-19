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

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        // Perform form validation
        if (username && email && phone) {
            // Handle form submission here (e.g., send data to a server or perform client-side processing)
            alert("Form submitted successfully!");
            // Reset form for fresh data entry
            form.reset();
            // Disable submit button after successful submission
            submitButton.disabled = true;
        } else {
            // If any field is empty, display error message
            alert("Please fill in all required fields.");
        }
    });
});