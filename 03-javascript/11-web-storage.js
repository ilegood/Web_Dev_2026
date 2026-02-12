const setSession = document.querySelector("#setSession");
const getSession = document.querySelector("#getSession");
const removeSession = document.querySelector("#removeSession");
const clearSession = document.querySelector("#clearSession");
const setLocal = document.querySelector("#setLocal");
const getLocal = document.querySelector("#getLocal");
const removeLocal = document.querySelector("#removeLocal");
const clearLocal = document.querySelector("#clearLocal");

// 세션에 저장
setSession.addEventListener("click", () => {
  sessionStorage.setItem("session", "세션"); // setItem("키", "값")
});
// 세션에 저장된 값 불러오기
getSession.addEventListener("click", () => {
  const session = sessionStorage.getItem("session");
  alert(session);
});
// 세션에 저장된 값 삭제
removeSession.addEventListener("click", () => {
  sessionStorage.removeItem("session");
});
// 세션 전체 삭제
clearSession.addEventListener("click", () => {
  sessionStorage.clear();
});
// 로컬에 저장 | 값은 무조건 문자, 객체는 저장되지 않음
setLocal.addEventListener("click", () => {
  localStorage.setItem("local", "로컬"); // setItem("키", "값")
  localStorage.setItem("user", JSON.stringify({ name: "사용자", age: 20 }));
});
// 로컬에 저장된 값 불러오기
getLocal.addEventListener("click", () => {
  const local = localStorage.getItem("local");
  const user = localStorage.getItem("user");
  console.log(local);
  // 문자열로 저장한 객체를 다시 객체로 변환
  console.log(JSON.parse(user).name);
});
// 로컬에 저장된 값 삭제
removeLocal.addEventListener("click", () => {
  localStorage.removeItem("local");
});
// 로컬 전체 삭제
clearLocal.addEventListener("click", () => {
  localStorage.clear();
});
