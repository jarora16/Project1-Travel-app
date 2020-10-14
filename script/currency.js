// List of currencies
var currencyList = [
    {name: "Australian dollar", code: "AUD"},
    {name: "Bulgarian lev", code: "BGN"},
    {name: "Brazilian real", code: "BRL"},
    {name: "Canadian dollar", code: "CAD"},
    {name: "Swiss franc", code: "CHF"},
    {name: "Chinese yuan renminbi", code: "CNY"},
    {name: "Czech koruna", code: "CZK"},
    {name: "Danish krone", code: "DKK"},
    {name: "Euro", code: "EUR"},
    {name: "Pound sterling", code: "GBP"},
    {name: "Hong Kong dollar", code: "HKD"},
    {name: "Croatian kuna", code: "HRK"},
    {name: "Hungarian forint", code: "HUF"},
    {name: "Indonesian rupiah", code: "IDR"},
    {name: "Israeli shekel", code: "ILS"},
    {name: "Indian rupee", code: "INR"},
    {name: "Icelandic krona", code: "ISK"},
    {name: "Japanese yen", code: "JPY"},
    {name: "South Korean won", code: "KRW"},
    {name: "Mexican peso", code: "MXN"},
    {name: "Malaysian ringgit", code: "MYR"},
    {name: "Norwegian krone", code: "NOK"},
    {name: "New Zealand dollar", code: "NZD"},
    {name: "Philippine peso", code: "PHP"},
    {name: "Polish zloty", code: "PLN"},
    {name: "Romanian leu", code: "RON"},
    {name: "Russian rouble", code: "RUB"},
    {name: "Swedish krona", code: "SEK"},
    {name: "Singapore dollar", code: "SGD"},
    {name: "Thai baht", code: "THB"},
    {name: "Turkish lira", code: "TRY"},
    {name: "US dollar", code: "USD"},
    {name: "South African rand", code: "ZAR"}
];

// Build options for the select element
// For each currency in the list
$.each(currencyList, function(index, currency) {
    // Create an option
    var optionEl = $("<option>").text(currency.name);
    optionEl.val(currency.code);
    $("#user-currency").append(optionEl);
});

// When user submits the form
$("#user-input").on("submit", function(event) {
    // Prevent for submission from refreshing the page
    event.preventDefault();
    // console.log($("#user-currency").val());
});