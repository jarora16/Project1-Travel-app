// apikey = 282ee419b4500a6eef79a6ccc4463ff5
// fetch(
//   "https://api.nomics.com/v1/exchange-rates?key=282ee419b4500a6eef79a6ccc4463ff5"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));
const settings = {
  async: true,
  crossDomain: true,
  // var crypto =
  // var currency =
  url:
    "https://rapidapi.p.rapidapi.com/query?from_currency=BTC&function=CURRENCY_EXCHANGE_RATE&to_currency=USD",
  method: "GET",
  headers: {
    "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
    "x-rapidapi-key": "70ae80e257msh6e0dc75fdeb3de7p149d3fjsn5f25b6f400f7",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
  var cryptoRate = response["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
  var crypoType = response["Realtime Currency Exchange Rate"]["1. From_Currency Code"];
});
