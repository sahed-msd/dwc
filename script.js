// Mock database for users
const users = {};

// Event listeners for login and registration
document.getElementById('login-form').addEventListener('submit', login);
document.getElementById('register-link').addEventListener('click', showRegisterForm);

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        alert('Login successful!');
        document.getElementById('login-register-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('user-display').innerText = username;
    } else {
        alert('Invalid username or password.');
    }
}

function showRegisterForm(event) {
    event.preventDefault();
    const username = prompt('Enter a username:');
    const password = prompt('Enter a password:');

    if (username && password) {
        users[username] = password;
        alert('Registration successful! Please log in.');
    } else {
        alert('Registration failed. Try again.');
    }
}

// Dashboard functionality
function createLink(platform) {
    const uniqueLink = `${window.location.origin}/track?platform=${platform}&user=${document.getElementById('user-display').innerText}`;
    const linkElement = document.createElement('a');
    linkElement.href = uniqueLink;
    linkElement.innerText = `Track ${platform} link`;
    linkElement.target = '_blank';

    document.getElementById('generated-links').appendChild(linkElement);
    alert(`Link created for ${platform}: ${uniqueLink}`);
}