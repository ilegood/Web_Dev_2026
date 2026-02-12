document.querySelector("#callback").addEventListener("click", () => {
  const result = document.querySelector("#callResult");
  result.textContent = "콜백 시작!";

  setTimeout(() => {
    result.textContent = "1초 후 실행";

    setTimeout(() => {
      result.textContent = "2초 후 실행";
    }, 1000);
  }, 1000);
});

document.querySelector("#promise").addEventListener("click", () => {
  const promise = document.querySelector("#promiseResult");
  // resolve : 성공했을 때, reject : 실패했을 때 | 서버에 요청 시 응답이 성공적으로 왔는 지
  new Promise((resolve) => {
    setTimeout(() => resolve("1초 후 실행"), 1000);
  })
    .then((data) => {
      promise.textContent = data;
      return new Promise((resolve) =>
        setTimeout(() => resolve("2초 후 실행"), 1000),
      );
    })
    .then((data) => {
      // resolve로 보낸 값 받는 곳
      promise.textContent = data;
    });
});
