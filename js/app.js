// User's pk is provided in myKey.js
//open weather api key
const publicKey = "81e523a727c53ce025369469bfe90940";
if(!pk)
  pk = publicKey;

// initial api request
$(document).ready(function () {
console.log('initializing ...');
endpoint = `https://api.openweathermap.org/data/2.5/weather?appid=${pk}`; // Current weather
//endpoint = `https://api.openweathermap.org/data/2.5/forecast?appid=${pk}`;  // 5 day weather forecast

  let mod = module();

  let intervalID;
  $('#fcb').click(() => {
    if (intervalID) return;
    getSomeMoreWeather();
    intervalID = setInterval(getSomeMoreWeather, 1000);
  });
  $('#fcb2').click(() => {
    if (!intervalID) return;
    clearInterval(intervalID);
    intervalID = null;
  });
//  $('#fcb').click(()=>getForecast(37.31610190977522, -121.98897793869743, showWeather));
  // $('#fcb').click(()=>getForecast(37.31610190977522, -121.98897793869743, showTemperature));
/*
  $('#fcb').click(function()
  {
    mod.getWeather();
    mod.showResult();
  });
*/  
});

function getSomeMoreWeather()
{
  getForecast(37.31610190977522, -121.98897793869743, showTemperature);
}

// function weatherMonster(endpoint)
// {
//   const endpoint = ...
//   const getCurrentWeather = function(lat,long) ...
//   const get5DayForecast = function(lat,long) ...

//   return {getCurrentWeather,get5DayForecast};
// }
// let wm = weathermonster();
// wm.get5DayForecast(lat,long);

function getForecast(lat, lon, cb=null)
{
  console.log('The mighty weather forecaster has been summoned ...');
  $.ajax({
    url: `${endpoint}&lat=${lat}&lon=${lon}&units=imperial`,
    dataType: "json",
    success: cb || function (result) {
      console.log(result);
    },
  });
};
const showWeather = function(result)
{
  let s = JSON.stringify(result).replaceAll(',',',<br />');
  $('#theweather').html(s);
};
const showTemperature = function(result)
{
  console.log(result);
  var temp = result['main']['temp'];
  var weatherImg = 'http://openweathermap.org/img/wn/' + result['weather'][0]['icon'] + '@2x.png';
  // Starting point for next time: move this HTML construction to have HTML in the .html file
  // and use jQuery to inject the data.
  $('#weatherimg').attr('src', weatherImg);
  $('#theweather').html(
    'Last updated: ' + Date.now() + '<br>' +
    '<img src="' + weatherImg + '" /><br>' +
    '<progress max="100" value="' + temp + '"></progress> ' + temp + 'F');
};

const module = function()
{
  let result = null;
  const showResult = ()=>console.log('showresult:'+result);
  const weathercb = function(res)
  {
console.log('res:',res);
    result = {...res};
  }
  const getWeather = function()
  {
    getForecast(37.31610190977522, -121.98897793869743, weathercb);
  }

  return {getWeather, showResult};
};

/*
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
*/

