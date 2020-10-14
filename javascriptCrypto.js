var apiKey = "282ee419b4500a6eef79a6ccc4463ff5";
var queryURL = "https://api.nomics.com/v1/exchange-rates?key=" + apiKey;

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
