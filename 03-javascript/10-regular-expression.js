// 메타문자
// /^값/ 글이 값으로 시작할 경우 true
console.log(`^ 테스트 : `, /^H/.test("Hello World"));

// /값$/ 글이 값으로 끝날 경우 true
console.log(`$ 테스트 : `, /d$/.test("Hello World"));

// /값/, /값.값/ 글의 값이 포함되어 있는 경우 true | 중복도 가능
console.log(`. 테스트 : `, /llo.W/.test("Hello World"));

// /값*값/ *앞의 값이 있어도 없어도 true
console.log(`* 테스트 : `, /abc*d/.test("abd"));

// /값+값/ +앞의 값이 무조건 하나 이상 있어야 true
console.log(`+ 테스트 : `, /abc+d/.test("abccd"));

// /값?값/ ?앞의 값이 없거나 한개만 있어야 true
console.log(`? 테스트 : `, /abc?d/.test("abcd"));

// /값{최소,최대} 값이 최소값만큼 포함되어 있으면 true | ^값$ 형식 : 최소에서 최대까지
console.log(`{m,n} 테스트 : `, /^a{2,4}$/.test("aaaaaa"));

// /[값]/ []속 값중 한 개라도 하나 이상 포함되어 있다면 true
// a-z : 알파벳 소문자, A-Z : 알파벳 대문자, 0-9 : 숫자, 가-힣: 한글, !-~ : 특수문자
console.log(`[] 테스트 : `, /^[a-zA-Z0-9]{2,8}$/.test("abABC012"));

// /(값A|값B)/ 값A 또는 값B 가 포함되어 있다면 true
console.log(`( | ) 테스트 : `, /(dog|cat)/.test("cat"));

// /\d/ 숫자가 포함되어 있으면 true | /\D/ 숫자가 포함되어 있으면 false
console.log(` \d 테스트 : `, /^\d+$/.test("012"));
console.log(` \D 테스트 : `, /^\D+$/.test("012"));

// /\w/ 문자, 숫자, _가 포함되어 있으면 true | /\W/ 문자, 숫자, _가 포함되어 있으면 false
console.log(` \w 테스트 : `, /^\w+$/.test("abc_123"));
console.log(` \W 테스트 : `, /^\W+$/.test("#@$"));

// /\s/ 공백이 포함되어 있으면 true | /\S/ 공백이 포함되어 있으면 false
console.log(` \s 테스트 : `, /\s/.test("abc 123"));
console.log(` \S 테스트 : `, /\S/.test("#@$"));

// Match / Replace / Split
const fruit = "apple, banana, kiwi, melon, orange";
console.log("match", fruit.match(/kiwi/)[0]); // 해당하는 값을 찾음 | [0] 해당하는 값만 출력
console.log("replace", fruit.replace(/a/g, "c")); // 해당하는 하나의 값을 값으로 변경 | g = 모든 값 찾기
console.log("split", fruit.split(/,/)); // 해당하는 값을 기준으로 배열을 나눔

// 주민등록번호 졍규표현식 예시
const input = document.querySelector("#input");
const result = document.querySelector("#result");
input.addEventListener("input", (e) => {
  //000000-0000000
  let regEXP = /^\d{2}[0-1][1-9][0-3][1-9]-[1-4][0-9]{6}$/; // {값} = 값만큼 반복
  if (regEXP.test(e.target.value)) {
    result.textContent = "OK!";
    result.style.color = "green";
  } else {
    result.textContent = "WRONG!";
    result.style.color = "red";
  }
});
