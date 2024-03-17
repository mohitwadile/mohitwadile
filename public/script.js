document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the form submit button
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form input values
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        // Perform form validation
        if (validateForm(username, email, phone)) {
            // If form is valid, store data in Firebase
            storeUserData(username, email, phone);
        } else {
            // If form is invalid, display error message or handle it as needed
            alert("Please fill in all required fields.");
        }
    });
});

// Function to validate form fields
function validateForm(username, email, phone) {
    // Add your validation logic here
    // For example, check if fields are not empty, email format is valid, etc.
    return username.trim() !== "" && email.trim() !== "" && phone.trim() !== "";
}

// Function to store user data in Firebase
function storeUserData(username, email, phone) {
    // Initialize Firebase
    const firebaseConfig = {
        // Your Firebase configuration
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    // Push data to Firebase database
    db.ref("users").push({
        username: username,
        email: email,
        phone: phone
    })
    .then(() => {
        // Upon successful submission, display success message
        alert("Login successful! Your data has been submitted.");
    })
    .catch((error) => {
        console.error("Error storing data: ", error);
        // Handle error if data submission fails
        alert("An error occurred. Please try again later.");
    });
}
