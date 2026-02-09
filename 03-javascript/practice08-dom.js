let turn = 0;

// 반복문
setInterval(() => {
  const now = new Date();

  // 숫자를 두 자리로 만들 때 사용
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  // 요일 배열 제공
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  const week = weeks[now.getDay()];

  const date = document.querySelector("#date");
  date.textContent = now.toLocaleDateString("en-CA") + " " + "(" + week + ")";

  const time = document.querySelector("#time");
  time.textContent = now.getHours() + ":" + minute + ":" + second;

  const thisYear = new Date("2027.01.01");
  const leftTime = document.querySelector("#leftTime");
  const remain = thisYear - now;

  const d = Math.floor(remain / (1000 * 60 * 60 * 24));
  const h = Math.floor((remain / (1000 * 60 * 60)) % 24);
  const m = Math.floor((remain / (1000 * 60)) % 60);
  const s = Math.floor((remain / 1000) % 60);

  leftTime.textContent = `올해 남은 시간 : ${d}일 ${h}시간 ${m}분 ${s}초`;
}, 1000);

// 문구 돌리기
setInterval(() => {
  const quoteEn = document.querySelector("#quoteEn");
  quoteEn.textContent = quotes[turn].en;
  const quoteKo = document.querySelector("#quoteKo");
  quoteKo.textContent = quotes[turn].ko;

  turn++;

  if (turn === quotes.length) {
    turn = 0;
  }

  const background = document.querySelector("body");
  background.style.backgroundColor = backgroundColor[turn];
}, 3000);

// 문구
const quotes = [
  {
    en: "God doesn't require us to succeed: he only requires that you try.",
    ko: "신은 우리에게 성공을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.",
  },
  {
    en: "Hold faithfulness and sincerity as first principles.",
    ko: "충심과 성실을 첫 번째 원칙으로 삼아라.",
  },
  {
    en: "Only actions give life strength; only moderation gives it a charm.",
    ko: "행동만이 삶에 힘을 주고 절제만이 삶에 매력을 준다.",
  },
  {
    en: "No one has ever made a difference by being like everyone else.",
    ko: "그저 남들과 똑같이 살면서 차이를 만들어낸 사람은 없다.",
  },
];

const backgroundColor = ["black", "indigo", "midnightblue", "teal"];
