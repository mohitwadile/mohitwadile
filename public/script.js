document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
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
        // Store data in Firebase
        storeUserData(username, email, phone);
      } else {
        // If any field is empty, display error message or handle it as needed
        alert("Please fill in all required fields.");
      }
    });
  
    function storeUserData(username, email, phone) {
      // Initialize Firebase
      const firebaseConfig = {
        // Your Firebase configuration
      };
      firebase.initializeApp(firebaseConfig);
      const db = firebase.database();
  
      // Push data to Firebase database
      db.ref("users")
        .push({ username, email, phone })
        .then(() => {
          // Upon successful submission, display success message
          alert("Login successful! Your data has been submitted.");
          // Reset form fields
          usernameInput.value = "";
          emailInput.value = "";
          phoneInput.value = "";
        })
        .catch((error) => {
          console.error("Error storing data: ", error);
          alert("An error occurred. Please try again later.");
        });
    }
  });