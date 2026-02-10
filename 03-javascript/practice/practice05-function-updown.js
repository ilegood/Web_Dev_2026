// 랜덤 숫자
function getTarget() {
  return Math.floor(Math.random() * 100 + 1);
}

//사용자 답변
function setInput() {
  const input = prompt("1~100까지의 숫자를 입력하세요");
  if (isNaN(input) || input === null) return input;
  return Number(input);
}

// 판단
function judge(randomNumber, input) {
  if (input === null) return null;

  if (isNaN(input)) return "redo";
  if (input === randomNumber) return "correct";
  else if (input < randomNumber) return "big";
  else return "small";
}

// 메세지 보여주기
function showMessage(result, attempt, input) {
  if (result === "correct") {
    alert(`정답입니다! ${attempt}번만에 맞추셨습니다!`);
    console.log(`${attempt}번째 : ${input} 정답!`);
  } else if (result === "redo") {
    alert(`제대로 입력해주세요`);
  } else if (result === "big") {
    alert(`${input}보다 큽니다`);
    console.log(`${attempt}번째 : ${input}보다 큼`);
  } else if (result === "small") {
    alert(`${input}보다 작습니다`);
    console.log(`${attempt}번째 : ${input}보다 작음`);
  }
}

// 게임 구성
function play() {
  const randomNumber = getTarget();
  while (true) {
    let attempt;
    const input = setInput();
    const result = judge(randomNumber, input);

    if (result === "correct" || result === "big" || result === "small") {
      attempt++;
    }
    showMessage(input, attempt, result);

    if (result === null || result === "correct") break;
    if (result === "redo") continue;
  }
}

play();

/*
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
*/
