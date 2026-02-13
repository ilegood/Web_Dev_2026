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

document.querySelector("#async").addEventListener("click", () => {
  const result = document.querySelector("#asyncAwaResult");

  const delay = (message) => {
    new Promise((resolve) => {
      setTimeout(() => resolve(message), 1000);
    });
  };

  const asyncAwait = async () => {
    const response = await delay("1초 후 실행");
    result.textContent = response;
    const response2 = await delat("2초 후 실행");
    result.textContent = response;
  };
  asyncAwait();
});

// htt
document.querySelector("#fetch").addEventListener("click", () => {
  const result = document.querySelector("#fetchResult");

  const fetchApi = async () => {
    const response = await fetch("https://api.tvmaze.com/shows/1");
    const data = await response.json();
    console.log(data);
    result.innerHTML = `<img src="${data.image.medium}"/>
    <h3>${data.name}</h3>
    <p>${data.summary}</p>
    `;
  };
  fetchApi();
});
