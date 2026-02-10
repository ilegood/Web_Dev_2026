// HTML 구조가 완전히 로드된 뒤 실행
window.addEventListener("DOMContentLoaded", () => {});

const click = document.querySelector("#click");
click.addEventListener("click", () => {
  alert("클릭 이벤트 발생");
  click.style.backgroundColor = "yellow";
});

const double = document.querySelector("#double");
double.addEventListener("dblclick", () => {
  alert("더블 클릭 이벤트 발생");
  double.style.backgroundColor = "yellow";
});

const right = document.querySelector("#right");
right.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("오른쪽 클릭 이벤트 발생");
  right.style.backgroundColor = "yellow";
});

const hover = document.querySelector("#hover");
hover.addEventListener("mouseenter", () => {
  alert("마우스 오버 이벤트 발생");
  hover.style.backgroundColor = "yellow";
  hover.textContent = "Moust Enter!";
});
hover.addEventListener("mouseleave", () => {
  alert("마우스 아웃 이벤트 발생");
  hover.style.backgroundColor = "white";
  hover.textContent = "Moust Leave!";
});

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  if (input.value === "") e.preventDefault();
  else alert("제출 완료");
});
/*
const img = document.querySelector(".container img");
for (let i = 0; i < img.clientHeight; i++) {
  img.addEventListener("click", (e) => {
    // img.style.display = "none";
    e.currentTarget.style.display = "none";
  });
}
*/
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  e.target.style.display = "none";
});
