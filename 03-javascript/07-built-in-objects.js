// Math 객체
console.log(`최소값 : ${Math.min(5, 7, -1, -8)}`);
console.log(`최대값 : ${Math.max(5, 7, -1, -8)}`);
console.log(`절대값 : ${Math.abs(-5.684)}`);
console.log(`반올림 : ${Math.round(5.684)}`);
console.log(`올림 : ${Math.ceil(5.684)}`);
console.log(`내림 : ${Math.floor(5.684)}`);
console.log(`랜덤 : ${Math.floor(Math.random() * 10 + 1)}`);
// 함수 안에 배열을 적고 싶을 땐 spread 연산자 (...이름)을 적으면 됨. / 예시) const nums = [0, 1, 2, 3](Math.max(...nums));
// 0 <= Math.random() < 1 이 기본식 전체 값에 곱하고 더하는 식으로 최소 최대값을 구함

// Date 객체 = 현재시간
const now = new Date();
console.log(now);
console.log(
  `${now.getFullYear()}년 / ${now.getMonth() + 1}월 / ${now.getDate()}일 / ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
);
// 특정 시간
const date = new Date(2005, 7, 20, 18, 10, 0);
console.log(date);
const date2 = new Date("2026-08-20");
console.log(date2);
const date3 = new Date("2026-08-20T18:10:00");
// 형식 지정
console.log(date3.toLocaleDateString()); // 2026.8.20
console.log(date2.toLocaleDateString("en-CA")); // 2026-08-20
console.log(date3.toLocaleTimeString()); // 오후 6:10:00
console.log(date3.toLocaleString()); // 2026. 8. 20. 오후 6:10:00
console.log(date2.toLocaleDateString("ko-KR", { weekday: "long" })); // 목요일

// String 객체
const str = new String("Hello, World!");
console.log("길이 :", str.length);
console.log("포함여부 :", str.includes("Hello"));
console.log("위치 : ", str.indexOf("World"));
console.log("일부 :", str.slice(7, 12));
console.log("대문자 : ", str.toUpperCase());
console.log("소문자 : ", str.toLowerCase());

// 지연 실행
setTimeout(() => {
  console.log("3초 후 실행!");
}, 3000); // 밀리세컨드 기준 : 1000당 1초

// 반복 실행
let sec = 0;
setInterval(() => {
  console.log(`${sec++}초`);
}, 1000);

// JSON
const obj = {
  name: "두쫀쿠",
  age: "2",
};
// 객체 -> 문자열
const jsonStr = JSON.stringify(obj);
console.log(obj, typeof obj);
console.log(jsonStr, typeof jsonStr);
// 문자열 -> 객체
const jsonParse = JSON.parse(jsonStr);
console.log(jsonParse, typeof jsonParse);

// BOM
console.log(this);

// location 객체
console.log(location.href); // 전체 브라우저 주소 / 정보를 찾을 때
console.log(location.host); // 호스트명(도메인)
console.log(location.pathname); // 경로

// 페이지 이동
// location.href = "https://www.youtube.com";
