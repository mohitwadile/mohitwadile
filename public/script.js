document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Check if all required fields are filled
    if (this.checkValidity()) {
        // Get form values
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const selectedClass = document.querySelector('input[name="class"]:checked').value;
        const selectedSubjects = document.querySelectorAll('input[name="subject"]:checked');
        const subjects = Array.from(selectedSubjects).map(subject => subject.value);
        const city = document.querySelector('select[name="city"]').value;
        const feedback = document.querySelector('textarea[name="feedback"]').value;

        // Hide the form
        this.style.display = 'none';

        // Display a success message
        document.getElementById('thankYouMessage').classList.remove('hidden');
    } else {
        // If required fields are not filled, display an error message or handle it as needed
        alert('Please fill in all required fields.');
    }
});
