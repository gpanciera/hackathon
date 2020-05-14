$(document).ready( () => {

  const cnapi = "http://api.icndb.com/jokes/random?firstName=John&lastName=Wick";

  fetch(cnapi)
  .then(response => response.json())
  .then(myJson => generatePage(myJson));

  function generatePage(jsonObj) {
    randomizeBG();
    populateJoke(jsonObj);
    getWeather();
  }

  function populateJoke(jokeJson) {
    console.log(jokeJson);
    let jokeContent = jokeJson.value.joke;
    $('#jokeHeader').html(jokeContent);
  }

  

  function getWeather() {
    let baseUrl = "http://api.weatherapi.com/v1";
    let apiMethod = "/current.json";
    let apiKey = "?key=ce9ef363281c4e0f9ce60427201405";
    let q = "&q=90035";
    fetch( baseUrl + apiMethod + apiKey + q) 
    .then( response => response.json() )
    .then( myJson => parseWeather(myJson) )
    .catch( error => console.log(error) );
  }

  function parseWeather(data) {
    console.log(data);
    let date = data.location.localtime;
    let loc = data.location.name + ', ' + data.location.region;
    let temp = data.current.temp_f + '&deg;F';
    let state = temp + ' ' + data.current.condition.text;
    let imgSrc = 'http:' + data.current.condition.icon; 
    let head6 = `<h6>${date}</h6>
                  <h6 id="loc">${loc}</h6>
                  <h6>${state}</h6>
                  <img src="${imgSrc}"></img>`
    ;
    $('#date').html(head6);
  }

  function randomizeBG() {
    let maxNum = 9;
    let randomNum = Math.ceil(Math.random() * maxNum);
    let imageString = 'url(images/wick' + randomNum + '.jpg)';
    let backgroundProp = 'radial-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.35)),' + imageString;
    $('#norrisbg').css('background-image', backgroundProp);
  }

})