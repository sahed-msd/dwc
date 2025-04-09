
function generateLink() {
  const link = window.location.origin + "/track.html";
  document.getElementById("link-output").innerHTML = "<p>" + link + "</p>";
}
function loadLogs() {
  const user = localStorage.getItem("currentUser");
  document.getElementById("user-name").innerText = user;
  const logs = JSON.parse(localStorage.getItem("logs") || "[]");
  const container = document.getElementById("visitor-logs");
  container.innerHTML = "";
  logs.forEach((log, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><b>Time:</b> ${log.time}</p>
      <p><b>Device:</b> ${log.device}</p>
      <img src="${log.image}" />
      <hr/>
    `;
    container.appendChild(div);
  });
}
window.onload = loadLogs;
