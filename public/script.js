// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCMtUIR4PHnTC6xCkcuJm4-DNNDK9bDAwU",
    authDomain: "my-first-project-29e75.firebaseapp.com",
    projectId: "my-first-project-29e75",
    storageBucket: "my-first-project-29e75.appspot.com",
    messagingSenderId: "433026282189",
    appId: "1:433026282189:web:c3fdb8a7fd86c8ba25ef84",
    measurementId: "G-DLCQ89PVHB"
  };

  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
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
      db.collection("responses").add({
          username: username,
          password: password,
          class: selectedClass,
          subjects: subjects,
          city: city,
          feedback: feedback
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          // Clear form fields after submission
          document.getElementById('registrationForm').reset();
          // Display a success message
          document.getElementById('thankYouMessage').classList.remove('hidden');
          setTimeout(function() {
              document.getElementById('thankYouMessage').classList.add('hidden');
          }, 3000); // Hide the message after 3 seconds (adjust as needed)
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
  });
  