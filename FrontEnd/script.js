function submitForm() {
    event.preventDefault();

    // Get form data
    const rollno = document.getElementById('rollno').value;
    const course = document.getElementById('course').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    // Create request object
    const xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', 'https://ww7hrfp02j.execute-api.ap-southeast-2.amazonaws.com/Test/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up response handler
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Registration successful!');
                document.getElementById('rollno').value = '';
                document.getElementById('course').value = '';                
                document.getElementById('name').value = '';
                document.getElementById('password').value = '';
                document.getElementById('phone').value = '';
            } else {
                alert('Registration failed: ' + xhr.responseText);
            }
        }
    };

    // Send request
    xhr.send(JSON.stringify({
        rollno: rollno,
        course: course,
        name: name,
        password: password,
        phone: phone
    }));
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Reset the form
    this.reset();
  });
  