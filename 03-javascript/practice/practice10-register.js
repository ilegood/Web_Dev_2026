const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const pwc = document.querySelector("#pwc");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const reg = document.querySelector(".btn #reg");
const cancel = document.querySelector(".btn #cancel");
const ps = document.querySelectorAll(".container p");
const valid = [false, false, false, false, false, false];

reg.setAttribute("disabled", "true");

id.addEventListener("input", (e) => {
  let regEXP = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  if (regEXP.test(e.target.value)) {
    ps[0].style.color = "green";
    ps[0].textContent =
      "영문자로 시작하고, 영문자와 숫자 조합으로 4~12자 이내 ✔";
    valid[0] = true;
  } else {
    ps[0].style.color = "#444";
    ps[0].textContent = "영문자로 시작하고, 영문자와 숫자 조합으로 4~12자 이내";
    valid[0] = false;
  }
  validCheck();
});

pw.addEventListener("input", (e) => {
  let regEXP = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])[!-~]{8,15}$/;
  if (regEXP.test(e.target.value)) {
    ps[1].style.color = "green";
    ps[1].textContent = "영문자, 숫자, 특수문자 조합으로 8~15자 이내 ✔";
    valid[1] = true;
  } else {
    ps[1].style.color = "#444";
    ps[1].textContent = "영문자, 숫자, 특수문자 조합으로 8~15자 이내";
    valid[1] = false;
  }
  validCheck();
});

pwc.addEventListener("input", (e) => {
  if (e.target.value === pw.value) {
    ps[2].style.color = "green";
    ps[2].textContent = "위 비밀번호와 동일하게 ✔";
    valid[2] = true;
  } else {
    ps[2].style.color = "#444";
    ps[2].textContent = "위 비밀번호와 동일하게";
    valid[2] = false;
  }
  validCheck();
});

userName.addEventListener("input", (e) => {
  let regEXP = /^[가-힣]{2,}$/;
  if (regEXP.test(e.target.value)) {
    ps[3].style.color = "green";
    ps[3].textContent = "한글 2자 이상 ✔";
    valid[3] = true;
  } else {
    ps[3].style.color = "#444";
    ps[3].textContent = "한글 2자 이상";
    valid[3] = false;
  }
  validCheck();
});

email.addEventListener("input", (e) => {
  const regEXP = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/;
  if (regEXP.test(e.target.value)) {
    ps[4].style.color = "green";
    ps[4].textContent = "이메일 형식 ✔";
    valid[4] = true;
  } else {
    ps[4].style.color = "#444";
    ps[4].textContent = "이메일 형식";
    valid[4] = false;
  }
  validCheck();
});

tel.addEventListener("input", (e) => {
  const regEXP = /^010-\d{4}-\d{4}$/;
  if (regEXP.test(e.target.value)) {
    ps[5].style.color = "green";
    ps[5].textContent = "전화번호 형식 ✔";
    valid[5] = true;
  } else {
    ps[5].style.color = "#444";
    ps[5].textContent = "전화번호 형식";
    valid[5] = false;
  }
  validCheck();
});

reg.addEventListener("click", () => {
  const user = {
    id: id.value,
    pw: pw.value,
    username: userName.value,
    email: email.value,
    tel: tel.value,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("회원가입이 완료되었습니다");
  window.location.href = "./practice11-login.html";
});

cancel.addEventListener("click", () => {
  location.reload();
});

function validCheck() {
  let all = true;

  for (let i = 0; i < valid.length; i++) {
    if (valid[i] === false) {
      all = false;
    }
  }

  reg.disabled = !all;
}
