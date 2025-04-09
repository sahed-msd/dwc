
function register() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (!user || !pass) return alert("Fill all fields");
  localStorage.setItem("user_" + user, pass);
  document.getElementById("message").innerText = "Registered successfully!";
}
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const stored = localStorage.getItem("user_" + user);
  if (stored === pass) {
    localStorage.setItem("currentUser", user);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").innerText = "Invalid credentials!";
  }
}
