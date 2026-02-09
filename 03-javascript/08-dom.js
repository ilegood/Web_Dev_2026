// 문서 객체 가져오기
console.log(document);
console.log(document.body);

// 태그로 가져오기
console.log(document.getElementsByTagName("h1"));

// 클래스로 가져오기
console.log(document.getElementsByClassName("bye"));

// 아이디로 가져오기
console.log(document.getElementById("hi"));

// querySelector(선택자) / querySelectorAll(선택자)
console.log(document.querySelector(".bye")); // .클래스 / #아이디
console.log(document.querySelectorAll(".bye"));

// 문서 객체 조작하기
const editDivs = document.querySelectorAll("div");
editDivs[0].textContent = "<span>안녕하세요</span>";
editDivs[0].innerHTML = "<span>안녕하세요</span>";

// 속성 조작
const editDiv = document.querySelector(".bye");
editDiv.setAttribute("data-test", "테스트");
console.log(editDiv.getAttribute("data-test"));
editDiv.removeAttribute("data-test");

// 스타일 조작
editDiv.style.color = "orange";
editDiv.style.backgroundColor = "yellow";

// 클래스 리스트 조작
const div2 = document.querySelector(".bye");
div2.classList.add("active");
console.log(div2.classList.contains("active"));
div2.classList.remove("active");
div2.classList.contains("active");
console.log(div2.classList.contains("active"));
div2.classList.toggle("active");
console.log(div2.classList.contains("active"));

const testId3 = document.querySelector("#testId3");
const p = document.createElement("p");
p.textContent =
  "I WANT TO GO HOME. I WANT TO PLAY GAME(DBD). I WANT TO EAT CHICKEN. AND I WANT TO WATCH YOUTUBE";
testId3.appendChild(p);

const pTarget = documet.querySelector("#testId3 p");
pTarget.remove();
