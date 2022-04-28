// $(document).ready(function () {
//   let endpoint = "https://api.linkpreview.net";
//   let apiKey = "5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8";
// });

// targeting elements in the html
const heroImg = document.querySelector(".hero-img");
const heroName = document.querySelector(".hero-name");
const heroDescription = document.querySelector(".description");

//open weather api key
const publicKey = "81e523a727c53ce025369469bfe90940";

// initial api request
$(document).ready(function () {
  let endpoint =
    "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=81e523a727c53ce025369469bfe90940";
  let apiKey = publicKey;
});

//
$(".content a").each(function (index, element) {
  $.ajax({
    url: endpoint,
    contentType: "application/json",
    dataType: "json",
    success: function (result) {
      console.log(result);
    },
  });
});
