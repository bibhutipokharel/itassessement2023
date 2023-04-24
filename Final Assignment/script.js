function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // Check if name, email, and message are not empty
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return false;
  }
  
  // Check if email is valid
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert('Please enter a valid email address.');
    return false;
  }
  
  // Form is valid, submit it
  // Uncomment the following line to actually submit the form
  // document.getElementById('contactForm').submit();
  
  alert('Form submitted successfully!');
}
