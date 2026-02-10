import quotes from "./quotes.js";

const current = () => {
  const now = new Date();

  // 숫자를 두 자리로 만들 때 사용
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  // 요일 배열 제공
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  const week = weeks[now.getDay()];

  // 날짜 배치
  const date = document.querySelector("#date");
  date.textContent = now.toLocaleDateString("en-CA") + " " + "(" + week + ")";

  // 시간 배치
  const time = document.querySelector("#time");
  time.textContent = now.getHours() + ":" + minute + ":" + second;
};

const count = () => {
  const now = new Date();

  // 남은 시간 배치
  const thisYear = new Date("2027.01.01");
  const leftTime = document.querySelector("#leftTime");
  const remain = thisYear - now;

  // 남은 시간 계산
  const d = Math.floor(remain / (1000 * 60 * 60 * 24));
  const h = Math.floor((remain / (1000 * 60 * 60)) % 24);
  const m = Math.floor((remain / (1000 * 60)) % 60);
  const s = Math.floor((remain / 1000) % 60);

  // 남은 시간 출력
  leftTime.textContent = `올해 남은 시간 : ${d}일 ${h}시간 ${m}분 ${s}초`;
};

const bg = () => {
  document.body.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.3)`;
};

const quote = () => {
  // 한 영 문구 출력
  const rq = Math.floor(Math.random() * quotes.length);

  const quoteEn = document.querySelector("#quoteEn");
  const quoteKo = document.querySelector("#quoteKo");

  quoteEn.textContent = `"${quotes[rq].en}"`;
  quoteKo.textContent = `"${quotes[rq].ko}"`;
};

bg();
current();
count();
quote();

// 반복문
setInterval(() => {
  current();
  count();
}, 1000);

// 문구 돌리기
setInterval(() => {
  quote();
  bg();
}, 10000);
