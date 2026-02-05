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
