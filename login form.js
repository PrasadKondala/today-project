function validateLogin() {
    // Add your authentication logic here
    // For simplicity, I'm using a basic check
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'prasad' && password === 'prasad@123') {
        showStudentForm();
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function showStudentForm() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('student-form-container').classList.remove('hidden');
}

function submitStudentForm() {
    // Add your form submission logic here
    // For simplicity, I'm just hiding the student form and showing the confirmation
    document.getElementById('student-form-container').classList.add('hidden');
    document.getElementById('confirmation-container').classList.remove('hidden');
}