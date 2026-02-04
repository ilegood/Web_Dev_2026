// function 함수명() {}

// 1. 매개변수 x, 리턴 값 x
function func() {
  console.log("Hello World!");
}
func(); // 함수 호출

// 2. 매개변수( parameter ) o, 리턴값 x
function para(greet) {
  console.log(`${greet}, Good Morning!`);
}
para("student"); // 값 지정

// 3. 매개변수 x, 리턴값 o
// return : 함수 호출 결과, 함수 종료
function ret() {
  return 5807;
}
console.log(ret());

// 4. 매개변수o, 리턴값 o
function both(x, y) {
  return x + y;
}
console.log(both(10, 20));

// 변수의 유효범위
const num1 = 100; // 전역변수
function sample() {
  const num1 = 200; // 지역변수
  // 함수 밖에서 안쪽 변수는 접근 불가
  console.log("내부 : " + num1);
}
sample();
console.log("외부 : " + num1);

// 선언적 vs 익명 vs 화살표 함수
// 선언적 함수 ( Function Declaration )
// 호이스팅 : 선언 이전에 호출이 가능한 상태
function multiply(a, b) {
  return a * b;
}
console.log("선언적 함수 : " + multiply(3, 4));

// 익명 함수 ( Function Expression )
// 함수명이 없음
const sub = function (a, b) {
  return a - b;
};
console.log("익명 함수 : ", sub(15, 5));

// 화살표 함수 ( Arrow Function )
// Function 대신 "=>" 사용
const divide = (a, b) => {
  return a / b;
};
console.log("화살표 함수 : ", divide(10, 2));

// 콜백 함수
// 다른 함수의 파라미터로 전달되는 함수
function callFunc(callback) {
  console.log("함수 호출 전!");
  callback();
  console.log("함수 호출 후!");
}
function call() {
  console.log("콜백 함수 호출!");
}
callFunc(call);

// 배열 관련 콜백 함수들
const arr = [1, 2, 3, 4, 5];

// 1. 값을 하나씩 출력 - forEach
arr.forEach((value /*index, array*/) => {
  console.log(value /*index, array*/);
});

// 2. 배열의 값을 각각 2배로 만들어서 출력 - map
// 각 배열의 값들을 가공하여 새로운 배열로 만들 때
const doubleArr = arr.map((value) => {
  return value * 2;
});
console.log(doubleArr);

// 3. 짝수만 출력 - filter
const even = arr.filter((value) => {
  return value % 2 === 0;
});
console.log(even);

// 4. 배열의 값의 총합
let sum = 0;
// reduce ((accumulator 누적된 값, value, index, array) => {}, 초기값)
const reduce = arr.reduce((acc, value) => {
  return acc + value;
}, 0);
console.log(reduce);
