user = {
  username: "admin",
  password: "admin",
};

function login() {
  let username = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (username == user.username && pass == user.password) {
    localStorage.setItem("username", username);
    localStorage.setItem("login", true);
    alert("Login berhasil");
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah");
  }
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("login");
  window.location.href = "login.html";
}
