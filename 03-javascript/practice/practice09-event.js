const img = document.querySelectorAll(".img");
const click = document.querySelector("#click");
const restart = document.querySelector("#restart");
const congrat = document.querySelector("h2");
let num = 1;

// 랜덤 이미지
click.addEventListener("click", randomImage);

function randomImage() {
  const result = [];

  img.forEach((img) => {
    const random = Math.floor(Math.random() * 3 + 1);
    img.style.backgroundImage = `url("./assets/spy${random}.jpg")`;
    result.push(random);
  });

  click.textContent = `Click ${num}`;

  const same = [...new Set(result)];
  console.log(same);

  if (same.length === 1) {
    congrat.textContent =
      "축하합니다! 다시 시작하려면 재시작 버튼을 눌러주세요!";
    click.setAttribute("disabled", "true");
  }

  num++;
}

// 재시작
restart.addEventListener("click", () => {
  location.reload();
});
