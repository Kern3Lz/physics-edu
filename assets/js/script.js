let user = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "user",
    password: "user",
  },
];

function login() {
  let username = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  for (let i = 0; i < user.length; i++) {
    if (username === user[i].username && pass === user[i].password) {
      localStorage.setItem("username", username);
      localStorage.setItem("login", true);
      alert("Login berhasil");
      window.location.href = "index.html";
      return;
    } else {
      alert("Username atau password salah");
      return;
    }
  }
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("login");
  window.location.href = "login.html";
}
