let user = [
  { username: "ADE BINTANG SEPTIAN", password: "50423036", level: "user" },
  { username: "admin", password: "admin", level: "admin" },
  { username: "AHMAD IRZA FARABY", password: "50423082", level: "user" },
  { username: "ALI MUKODASSAIT", password: "50423122", level: "user" },
  { username: "ANGGA RIZKI NUGRAHA", password: "50423181", level: "user" },
  { username: "AXL REGAN YOHANDE", password: " 50423237", level: "user" },
  { username: "BIMA GUNAWAN", password: "50423276", level: "user" },
  { username: "DEKAS PUTRA SYACHDILLAH", password: "50423351", level: "user" },
  { username: "DIMAS SYIFA AULIA", password: "50423390", level: "user" },
  { username: "ECHA OKTAVIANI", password: "50423399", level: "user" },
  { username: "FADHLAN ATHHARIANSYAH", password: "50423427", level: "user" },
  { username: "FARREL KENT RIDVANZA", password: "50423469", level: "user" },
  { username: "FRODITUS ANTARES ALLOLEDO", password: "50423521", level: "user" },
  { username: "GUNTUR MAULANA FARIS", password: "50423547", level: "user" },
  { username: "HENDRIKO HEIN KALIGIS", password: "50423583", level: "user" },
  { username: "INDRA RAMADHAN", password: "50423620", level: "user" },
  { username: "JOSSE ANDRIAN", password: "50423664", level: "user" },
  { username: "KEISHA PUTRI PURNAMA", password: "50423683", level: "user" },
  { username: "LUTFI SEPTIAWAN ALWIN", password: "50423722", level: "user" },
  { username: "MAHER SAHAB", password: "50423741", level: "user" },
  { username: "MOHAMAD KEVIN EMIR ALKHATAMI", password: "50423792", level: "user" },
  { username: "MUHAMAD KHOIRIL", password: "50423828", level: "user" },
  { username: "MUHAMMAD ARIEL ARIFQI", password: "50423864", level: "user" },
  { username: "MUHAMMAD DICKY KURNIAWAN", password: "50423885", level: "user" },
  { username: "MUHAMMAD FARHAN", password: "51423515", level: "user" },
  { username: "MUHAMMAD FATIH MAULANA ", password: "50423908", level: "user" },
  { username: "MUHAMMAD FIQQIE AULIA", password: "50423919", level: "user" },
  { username: "MUHAMMAD NAUFAL ZAIN", password: "50423965", level: "user" },
  { username: "MUHAMMAD VAREL ALKHATRAN SAVERO", password: "51423028", level: "user" },
  { username: "NATASYA KAMILA HIDAYAT", password: "51423078", level: "user" },
  { username: "NAZRIL BINTANG PRATAMA", password: "51423096", level: "user" },
  { username: "RADEN HAIKAL RIZKI TRI HARTANTO", password: "51423165", level: "user" },
  { username: "RAFLI AULIA ALIF", password: "51423190", level: "user" },
  { username: "RANTI NATASHA PUTRI", password: "51423243", level: "user" },
  { username: "RENDI FIRMANSYAH", password: "51423267", level: "user" },
  { username: "RIFQIE FARHAN SUGIENA", password: "51423304", level: "user" },
  { username: "SALSEPA ZENAS VITO", password: "51423355", level: "user" },
  { username: "SUKEN MUCHAMMAD FAUZAN", password: "51423401", level: "user" },
  { username: "VIQRI RAMADHAN WALUYA", password: "51423454", level: "user" },
  { username: "YUVI MUHAMMAD JURDAN", password: "51423490", level: "user" },
];

function login() {
  let username = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  for (let i = 0; i < user.length; i++) {
    if (username === user[i].username && pass === user[i].password) {
      localStorage.setItem("username", username);
      localStorage.setItem("login", user[i].level);
      alert("Login Berhasil");
      window.location.href = "index.html";
      return;
    }
  }
  if (username === "" || pass === "") {
    alert("Username dan Password harus diisi");
  } else {
    alert("Username atau Password salah");
  }
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("login");
  window.location.href = "login.html";
}
