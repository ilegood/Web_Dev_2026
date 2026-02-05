// 컴퓨터 객체
class ComputerHand {
  constructor() {
    this.com = ""; // < gpt 최고
  }

  getHand() {
    let ch = Math.floor(Math.random() * 3);

    if (ch === 0) this.com = "가위";
    else if (ch === 1) this.com = "바위";
    else this.com = "보";
  }
}

// 사용자 객체
class PlayerHand {
  constructor() {
    this.p = "";
  }

  getHand() {
    let ph = prompt("가위 / 바위 / 보 중 하나를 입력하세요!");
    this.p = ph;
  }
}

// 게임 객체
const game = {
  win: 0,
  lose: 0,
  draw: 0,

  play() {
    while (true) {
      // 컴퓨터 랜덤 값
      let computer = new ComputerHand();
      computer.getHand();
      // 플레이어 값
      let player = new PlayerHand();
      player.getHand();
      // 결과창 보여주기 및 승 무 패 여부
      if (player.p === null || player.p === "") {
        alert(`승부 결과 : ${this.win}승 ${this.draw}무 ${this.lose}패`);
        alert(
          `판 수 : ${this.win + this.lose + this.draw}판 , 승률 : ${parseInt(
            (this.win / (this.win + this.lose + this.draw)) * 100,
          )}%`,
        );
        break;
      } else if (
        player.p !== "가위" &&
        player.p !== "바위" &&
        player.p !== "보"
      ) {
        alert("제대로 입력해주세요");
        continue;
      }
      if (player.p === computer.com) {
        alert("무승부");
        this.draw++;
      } else if (
        (player.p === "가위" && computer.com === "보") ||
        (player.p === "바위" && computer.com === "가위") ||
        (player.p === "보" && computer.com === "바위")
      ) {
        alert("승리!");
        this.win++;
      } else if (
        player.p === "가위" ||
        player.p === "바위" ||
        player.p === "보"
      ) {
        alert("패배...");
        this.lose++;
      }
    }
  },
};

game.play();
/* 
let win = 0;
let lose = 0;
let draw = 0;

while (true) {
  // 컴퓨터 랜덤
  let computer = Math.floor(Math.random() * 3);

  if (computer === 0) {
    computer = "가위";
  } else if (computer === 1) {
    computer = "바위";
  } else {
    computer = "보";
  }

  // 사용자 입력
  let input = prompt("가위 / 바위 / 보 중 하나를 입력하세요!");

  if (input === null || input === "") {
    alert(`승부 결과 : ${win}승 ${draw}무 ${lose}패`);
    alert(
      `판 수 : ${win + lose + draw}판 , 승률 : ${parseInt((win / (win + lose + draw)) * 100)}%`,
    );
    break;
  } else if (input !== "가위" && input !== "바위" && input !== "보") {
    alert("제대로 입력해주세요");
    continue;
  }

  // 승 무 패 여부
  if (input === computer) {
    alert("무승부");
    draw++;
  } else if (
    (input === "가위" && computer === "보") ||
    (input === "바위" && computer === "가위") ||
    (input === "보" && computer === "바위")
  ) {
    alert("승리");
    win++;
  } else if (input === "가위" || input === "바위" || input === "보") {
    alert("패배");
    lose++;
  }
}
*/
