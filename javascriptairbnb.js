// apikey = 282ee419b4500a6eef79a6ccc4463ff5
fetch(
  "https://api.nomics.com/v1/exchange-rates?key=282ee419b4500a6eef79a6ccc4463ff5"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
