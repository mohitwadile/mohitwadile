document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Check if all required fields are filled
    if (this.checkValidity()) {
        // Hide the form
        this.style.display = 'none';

        // Display a success message
        document.getElementById('thankYouMessage').classList.remove('hidden');
    } else {
        // If required fields are not filled, display an error message or handle it as needed
        alert('Please fill in all required fields.');
    }
});
