document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate form fields
    const errorMessage = validateForm(fullName, email, phoneNumber, password, confirmPassword);

    // Display error message if any
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.innerText = errorMessage;

    // If no error, you can submit the form or perform other actions
    if (!errorMessage) {
    }
});

function validateForm(fullName, email, phoneNumber, password, confirmPassword) {
    if (fullName.length < 5) {
        return 'Name must be at least 5 characters.';
    }

    if (!email.includes('@')) {
        return 'Enter a valid email address.';
    }

    if (phoneNumber === '123456789' || phoneNumber.length !== 10) {
        return 'Enter a valid 10-digit phone number.';
    }

    if (password === 'password' || password.length < 8 || password === fullName) {
        return 'Password must be at least 8 characters and not be "password" or the user\'s name.';
    }

    if (password !== confirmPassword) {
        return 'Passwords do not match.';
    }

    return ''; // No error
}
