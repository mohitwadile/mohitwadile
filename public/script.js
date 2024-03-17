document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;
    var selectedClass = document.querySelector('input[name="class"]:checked');
    var selectedSubjects = document.querySelectorAll('input[name="subject"]:checked');
    var city = document.querySelector('select[name="city"]').value;
    var feedback = document.getElementById('feedback').value;
  
    // Create an array to store selected subjects
    var selectedSubjectsArray = [];
    selectedSubjects.forEach(function(subject) {
      selectedSubjectsArray.push(subject.value);
    });
  
    // Log the form values
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Class:', selectedClass ? selectedClass.value : 'Not selected');
    console.log('Subjects:', selectedSubjectsArray.join(', ') || 'None selected');
    console.log('City:', city);
    console.log('Feedback:', feedback);
  
    // For this example, just log the values to the console
  });
  