document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const selectedClass = document.querySelector('input[name="class"]:checked').value;
    const selectedSubjects = document.querySelectorAll('input[name="subject"]:checked');
    const subjects = Array.from(selectedSubjects).map(subject => subject.value);
    const city = document.querySelector('select[name="city"]').value;
    const feedback = document.querySelector('textarea[name="feedback"]').value;

    // Add data to Firebase Firestore
    // Here, you can replace this with your Firebase Firestore code to store the form data
    // For this example, let's just display the "Thank you!" message
    document.getElementById('thankYouMessage').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('thankYouMessage').classList.add('hidden');
    }, 3000); // Hide the message after 3 seconds (adjust as needed)
});
