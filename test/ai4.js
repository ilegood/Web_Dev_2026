let money = 0;

// 도구 수
let autoCount = 0;
let factoryCount = 0;

// 가격
let autoPrice = 50;
let factoryPrice = 200;

const moneyEl = document.getElementById("money");
const autoCountEl = document.getElementById("autoCount");
const factoryCountEl = document.getElementById("factoryCount");
const autoPriceEl = document.getElementById("autoPrice");
const factoryPriceEl = document.getElementById("factoryPrice");

document.getElementById("clickBtn").addEventListener("click", () => {
  money += 1;
  updateUI();
});

function buyAuto() {
  if (money < autoPrice) {
    alert("돈이 부족함 ㅋㅋ");
    return;
  }

  money -= autoPrice;
  autoCount++;

  autoPrice = Math.floor(autoPrice * 1.4);

  updateUI();
}

function buyFactory() {
  if (money < factoryPrice) {
    alert("돈이 부족함 ㅋㅋ");
    return;
  }

  money -= factoryPrice;
  factoryCount++;

  factoryPrice = Math.floor(factoryPrice * 1.5);

  updateUI();
}

function updateUI() {
  moneyEl.textContent = money;
  autoCountEl.textContent = autoCount;
  factoryCountEl.textContent = factoryCount;
  autoPriceEl.textContent = autoPrice;
  factoryPriceEl.textContent = factoryPrice;
}

// 자동 수익
setInterval(() => {
  const income = autoCount * 1 + factoryCount * 5;

  money += income;
  updateUI();
}, 1000);
