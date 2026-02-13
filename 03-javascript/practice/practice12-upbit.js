// https://api.upbit.com/v1/ticker?markets=KRW-BTC
// https://api.upbit.com/v1/market/all
const coin = document.querySelector("#coin");

const upbeat = async () => {
  const response = await fetch("https://api.upbit.com/v1/market/all");
  const data = await response.json();

  const markets = data.map((value) => {
    return value.market;
  });

  const response2 = await fetch(
    `https://api.upbit.com/v1/ticker?markets=${markets.join(",")}`,
  );
  const data2 = await response2.json();

  const resultData = data.map((value) => {
    const result = data2.find((item) => value.market === item.market);
    return { ...value, ...result };
  });

  resultData.forEach((value) => {
    coin.innerHTML += `<div class="card">
    <h3>${value.korean_name} <span style="color: gray; font-size: 12px">(${value.english_name})</span></h3>
    <p>${value.trade_price.toFixed(8)}원</p>
    전일 대비 : <span style="color:${value.change === "EVEN" ? "gray" : value.change === "RISE" ? "red" : value.change === "FALL" ? "blue" : ""}">${value.change === "EVEN" ? "보합" : value.change === "RISE" ? "상승" : value.change === "FALL" ? "하락" : ""} ${(value.change_rate * 100).toFixed(2)}%<span></p></div>`;
  });
};

upbeat();
