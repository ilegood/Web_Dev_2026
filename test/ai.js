const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value;
  const passwordCheck = document.getElementById("passwordCheck").value;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const nationality = document.getElementById("nationality").value;

  const genderEl = document.querySelector("input[name='gender']:checked");

  if (!userId) {
    alert("아이디를 입력하세요.");
    return;
  }

  if (password.length < 6) {
    alert("비밀번호는 6자 이상이어야 합니다.");
    return;
  }

  if (password !== passwordCheck) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  if (!name) {
    alert("이름을 입력하세요.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("이메일 형식이 올바르지 않습니다.");
    return;
  }

  const phoneRegex = /^01[0-9]-\d{3,4}-\d{4}$/;
  if (!phoneRegex.test(phone)) {
    alert("전화번호 형식이 올바르지 않습니다. (010-0000-0000)");
    return;
  }

  if (!genderEl) {
    alert("성별을 선택하세요.");
    return;
  }

  if (!nationality) {
    alert("내/외국인 여부를 선택하세요.");
    return;
  }

  const formData = {
    userId,
    password,
    name,
    email,
    phone,
    gender: genderEl.value,
    nationality,
  };

  console.log(formData);
  alert("회원가입 완료 (콘솔 확인)");
});
