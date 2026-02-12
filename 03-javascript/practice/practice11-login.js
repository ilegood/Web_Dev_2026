const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const login = document.querySelector("#login");
const reg = document.querySelector("#reg");
const loginbox = document.querySelector("#loginbox");
const welcombox = document.querySelector("#welcombox");
const welcome = document.querySelector("#welcome");
const email = document.querySelector(".usermail");
const tel = document.querySelector(".usertel");
const logout = document.querySelector("#logout");
const out = document.querySelector("#out");

const user = JSON.parse(localStorage.getItem("user"));

welcombox.style.display = "none";

id.addEventListener("input", check);
pw.addEventListener("input", check);

function check() {
  if (id.value === user.id && pw.value === user.pw) {
    login.disabled = false;
  } else {
    login.disabled = true;
  }
}

login.addEventListener("click", () => {
  loginbox.style.display = "none";
  welcombox.style.display = "flex";

  welcome.textContent = `${user.username}님 환영합니다!`;
  email.textContent = user.email;
  tel.textContent = user.tel;
});

logout.addEventListener("click", () => {
  window.location.reload();
});

out.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.reload();
});

reg.addEventListener("click", () => {
  window.location.href = "./practice10-register.html";
});
