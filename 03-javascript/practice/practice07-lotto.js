let count = 0;

while (true) {
  // 로또 배열
  let computerLotto = [];
  let playerLotto = [];
  let match = 0;
  let attempt = 3; // 등 수 번호 적으면 해당 등수 나올때까지 적음

  // 로또 번호 생성 및 중복 방지
  while (computerLotto.length < 7) {
    let random = Math.floor(Math.random() * 45 + 1);
    if (!computerLotto.includes(random)) {
      computerLotto.push(random);
    }
  }
  while (playerLotto.length < 6) {
    let random = Math.floor(Math.random() * 45 + 1);
    if (!playerLotto.includes(random)) {
      playerLotto.push(random);
    }
  }

  count++;

  // 보너스 번호 생성
  let bonus = computerLotto[computerLotto.length - 1];
  computerLotto = computerLotto.slice(0, 6);

  // 로또 정렬
  computerLotto.sort((a, b) => a - b);
  playerLotto.sort((a, b) => a - b);

  // 로또 번호 당첨 여부
  for (let i = 0; i < 6; i++) {
    if (computerLotto.includes(playerLotto[i])) {
      match++;
    }
  }
  if (attempt === 1) {
    if (match === 6) {
      console.log("1등 당첨!");
      showMessage(computerLotto, bonus, playerLotto, match);
      console.log(`${count}번 만에 성공하셨습니다`);
      break;
    }
  } else if (attempt === 2) {
    if (match === 5) {
      if (playerLotto.includes(bonus)) {
        console.log("2등 당첨!");
        showMessage(computerLotto, bonus, playerLotto, match);
        console.log(`${count}번 만에 성공하셨습니다`);
        break;
      }
    }
  } else if (attempt === 3) {
    if (match === 5) {
      console.log("3등 당첨!");
      showMessage(computerLotto, bonus, playerLotto, match);
      console.log(`${count}번 만에 성공하셨습니다`);
      break;
    }
  } else if (attempt === 4) {
    if (match === 4) {
      console.log("4등 당첨!");
      showMessage(computerLotto, bonus, playerLotto, match);
      console.log(`${count}번 만에 성공하셨습니다`);
      break;
    }
  } else if (attempt === 5) {
    if (match === 3) {
      console.log("5등 당첨!");
      showMessage(computerLotto, bonus, playerLotto, match);
      console.log(`${count}번 만에 성공하셨습니다`);
      break;
    }
  }

  /*
  if (match === 6) {
    console.log("1등 당첨!");
    showMessage(computerLotto, bonus, playerLotto, match);
    break;
  } else if (match === 5) {
    if (playerLotto.includes(bonus)) {
      console.log("2등 당첨!");
      showMessage(computerLotto, bonus, playerLotto, match);
      break;
    } else {
      console.log("3등 당첨!");
      showMessage(computerLotto, bonus, playerLotto, match);
      break;
    }
  } else if (match === 4) {
    console.log("4등 당첨!");
    showMessage(computerLotto, bonus, playerLotto, match);
    break;
  } else if (match === 3) {
    console.log("5등 당첨!");
    showMessage(computerLotto, bonus, playerLotto, match);
    break;
  }

  */

  showMessage(computerLotto, bonus, playerLotto);

  // 메세지 보여주기
  function showMessage(computerLotto, bonus, playerLotto) {
    // 당첨 번호 공개
    console.log(`로또 번호 :[ ${computerLotto} + ${bonus} ]`);
    console.log(`플레이어 로또 번호 :[ ${playerLotto} ]`);
  }
}
