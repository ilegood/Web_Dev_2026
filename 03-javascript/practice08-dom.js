// 문제 1. 텍스트 출력
function printText() {
  const num1 = document.getElementById("result1");
  num1.textContent = "Hello World!";
}

// 문제 2. Input 값 출력
function printInputValue() {
  const answer = document.getElementById("customer");
  const num2 = document.getElementById("result2");
  num2.textContent = answer.value;
}

// 문제 3. div 색상 변경
function changeColor() {
  const num3 = document.getElementById("colorBox");
  num3.style.backgroundColor = "Orange";
}
// 문제 4. 문자열 길이 출력
function stringLength() {
  const text = document.getElementById("text");
  const num4 = document.getElementById("result4");
  num4.textContent = text.value.length;
}
