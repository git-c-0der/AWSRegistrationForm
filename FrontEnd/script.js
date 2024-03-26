function submitForm() {
    event.preventDefault();

    // Get form data
    const tempRoll = document.getElementById('tempRoll').value;
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('phone').value;
    const phone = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create request object
    const xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', 'https://78phiqq5ye.execute-api.ap-south-1.amazonaws.com/prod/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up response handler
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Registration successful!');
                document.getElementById('tempRoll').value = '';
                document.getElementById('name').value = '';                
                document.getElementById('course').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
            } else {
                alert('Registration failed: ' + xhr.responseText);
            }
        }
    };

    // Send request
    xhr.send(JSON.stringify({
        tempRoll: tempRoll,
        name: name,
        course: course,
        phone: phone,
        email: email,
        password: password
    }));
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Reset the form
    this.reset();
  });
  
