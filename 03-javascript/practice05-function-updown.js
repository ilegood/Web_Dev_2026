// 숫자 랜덤 생성
const randomNumber = Math.floor(Math.random() * 100 + 1);
let attempt = 0;

//사용자 답변
function guess() {
  let number = prompt("1 ~ 100 사이의 숫자를 입력하세요.");

  if (number === null) {
    return;
  }

  if (isNaN(number)) {
    alert("제대로 입력해주세요");
    guess();
  }

  number = Number(number);
  attempt++;

  if (number === randomNumber) {
    alert(`정답입니다! ${attempt}번만에 맞추셨습니다!`);
  } else if (number < randomNumber && number !== null) {
    alert(`${number}보다 큽니다`);
    guess();
  } else {
    alert(`${number}보다 작습니다`);
    guess();
  }
}

guess();
