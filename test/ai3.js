const genres = [
  "로그라이크",
  "소울라이크",
  "타워 디펜스",
  "액션 RPG",
  "퍼즐 액션",
  "플랫포머",
  "서바이벌",
];

const controls = [
  "마우스 조준 중심",
  "스틱 이동 + 자동 공격",
  "대시 중심 조작",
  "한 버튼 조작",
  "리듬 기반 입력",
];

const mechanics = [
  "적의 스킬을 훔쳐서 사용",
  "체력이 곧 탄약",
  "공격할수록 맵이 좁아짐",
  "시간을 되감아 위치만 유지",
  "스킬을 조합해서 새로운 효과 생성",
  "피격 시 능력이 랜덤 변경",
];

const limits = [
  "회복 수단이 거의 없음",
  "미니맵 사용 불가",
  "스킬 슬롯 2개 제한",
  "대시 불가",
  "공격 방향 고정",
  "시야가 매우 좁음",
];

let currentIdea = null;
let savedIdeas = [];

const genreEl = document.getElementById("genre");
const controlEl = document.getElementById("control");
const mechanicEl = document.getElementById("mechanic");
const limitEl = document.getElementById("limit");

document.getElementById("generateBtn").addEventListener("click", generateIdea);
document.getElementById("saveBtn").addEventListener("click", saveIdea);

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateIdea() {
  currentIdea = {
    genre: pick(genres),
    control: pick(controls),
    mechanic: pick(mechanics),
    limit: pick(limits),
  };

  genreEl.textContent = currentIdea.genre;
  controlEl.textContent = currentIdea.control;
  mechanicEl.textContent = currentIdea.mechanic;
  limitEl.textContent = currentIdea.limit;
}

function saveIdea() {
  if (!currentIdea) {
    alert("먼저 아이디어를 생성해줘");
    return;
  }

  savedIdeas.push({ ...currentIdea });
  renderBoard();
}

function renderBoard() {
  const list = document.getElementById("ideaList");
  list.innerHTML = "";

  savedIdeas.forEach((idea, idx) => {
    const li = document.createElement("li");
    li.textContent = `${idx + 1}. [${idea.genre}] ${idea.control} / ${idea.mechanic} / 제약: ${idea.limit}`;
    list.appendChild(li);
  });
}
