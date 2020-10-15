// var currencyList = [
//   { name: "Australian dollar", code: "AUD" },
//   { name: "Bulgarian lev", code: "BGN" },
//   { name: "Brazilian real", code: "BRL" },
//   { name: "Canadian dollar", code: "CAD" },
//   { name: "Swiss franc", code: "CHF" },
//   { name: "Chinese yuan renminbi", code: "CNY" },
//   { name: "Czech koruna", code: "CZK" },
//   { name: "Danish krone", code: "DKK" },
//   { name: "Euro", code: "EUR" },
//   { name: "Pound sterling", code: "GBP" },
//   { name: "Hong Kong dollar", code: "HKD" },
//   { name: "Croatian kuna", code: "HRK" },
//   { name: "Hungarian forint", code: "HUF" },
//   { name: "Indonesian rupiah", code: "IDR" },
//   { name: "Israeli shekel", code: "ILS" },
//   { name: "Indian rupee", code: "INR" },
//   { name: "Icelandic krona", code: "ISK" },
//   { name: "Japanese yen", code: "JPY" },
//   { name: "South Korean won", code: "KRW" },
//   { name: "Mexican peso", code: "MXN" },
//   { name: "Malaysian ringgit", code: "MYR" },
//   { name: "Norwegian krone", code: "NOK" },
//   { name: "New Zealand dollar", code: "NZD" },
//   { name: "Philippine peso", code: "PHP" },
//   { name: "Polish zloty", code: "PLN" },
//   { name: "Romanian leu", code: "RON" },
//   { name: "Russian rouble", code: "RUB" },
//   { name: "Swedish krona", code: "SEK" },
//   { name: "Singapore dollar", code: "SGD" },
//   { name: "Thai baht", code: "THB" },
//   { name: "Turkish lira", code: "TRY" },
//   { name: "US dollar", code: "USD" },
//   { name: "South African rand", code: "ZAR" },
// ];
var cryptoList = [
  { name: "Bitcoin", code: "BTC" },
  { name: "Ethereum", code: "ETH" },
  { name: "Tether", code: "USDT" },
  { name: "XRP", code: "XRP" },
  { name: "Bitcoin Cash", code: "BCH" },
  // { name: "Binance Coin", code: "BNB" },
  // { name: "Chainlink", code: "LINK" },
  // { name: "Cardano", code: "ADA" },
  // { name: "Litecoin", code: "LTC" },
  // { name: "Bitcoin SV", code: "BSV" },
  // { name: "Crypto.com Coin", code: "CRO" },
  // { name: "USD Coin", code: "USDC" },
  // { name: "EOS", code: "EOS" },
  // { name: "Monero", code: "XMR" },
  // { name: "TRON", code: "TRX" },
  // { name: "Tezos", code: "XTZ" },
  // { name: "Stellar", code: "XLM" },
  // { name: "Neo", code: "NEO" },
  // { name: "UNUS SED LEO", code: "LEO" },
  // { name: "Cosmos", code: "ATOM" },
  // { name: "NEM", code: "XEM" },
];
// var cryptoCurrency = "BTC";
// var baseCurrency = "USD";
$("#user-input").on("submit", function (event) {
  event.preventDefault();
  var baseCurrency = $("#user-currency").val();
  var userAmount = $("#user-amount").val();
  $("#crypto").text(userAmount + " " + baseCurrency + " equals to:");
  for (var i = 0; i < cryptoList.length; i++) {
    var cryptoCode = cryptoList[i].code;

    if (baseCurrency && userAmount) {
      var settings = {
        async: true,
        crossDomain: true,
        url:
          "https://rapidapi.p.rapidapi.com/query?from_currency=" +
          cryptoCode +
          "&function=CURRENCY_EXCHANGE_RATE&to_currency=" +
          baseCurrency,
        method: "GET",
        headers: {
          "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
          "x-rapidapi-key":
            "70ae80e257msh6e0dc75fdeb3de7p149d3fjsn5f25b6f400f7",
        },
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
        var cryptoRate = parseFloat(
          response["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        var cryptoType =
          response["Realtime Currency Exchange Rate"]["1. From_Currency Code"];
        var cryptoDiv = $("<tr>");
        var rowDiv = $("<td>");
        $(rowDiv).text(cryptoType + ": " + cryptoRate.toFixed(2));
        $(cryptoDiv).append(rowDiv);
        $("#crypto").append(cryptoDiv);
      });
    }
    // input currency type
    // input amount value
    // press button
    // showcase list of different cryptos
    //
  }
});
