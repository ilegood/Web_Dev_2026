const form = document.getElementById("characterForm");
const list = document.getElementById("characterList");
const detailBox = document.getElementById("detailBox");

let characters = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = charName.value.trim();
  const motif = charMotif.value.trim();
  const attackType = document.getElementById("attackType").value;
  const hp = document.getElementById("hp").value;
  const note = document.getElementById("note").value.trim();

  if (!name) {
    alert("이름은 필수야");
    return;
  }

  const character = {
    id: Date.now(),
    name,
    motif,
    attackType,
    hp,
    note,
  };

  characters.push(character);
  renderList();
  form.reset();
});

function renderList() {
  list.innerHTML = "";

  characters.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = `${c.name} (${c.attackType || "미지정"})`;
    li.addEventListener("click", () => showDetail(c.id));
    list.appendChild(li);
  });
}

function showDetail(id) {
  const c = characters.find((x) => x.id === id);

  detailBox.innerHTML = `
        <div class="detailBoxRow"><b>이름</b> : ${c.name}</div>
        <div class="detailBoxRow"><b>모티브</b> : ${c.motif || "-"}</div>
        <div class="detailBoxRow"><b>공격 타입</b> : ${c.attackType || "-"}</div>
        <div class="detailBoxRow"><b>체력</b> : ${c.hp}</div>
        <div class="detailBoxRow"><b>메모</b> : ${c.note || "-"}</div>
    `;
}
