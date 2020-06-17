
// put this all inside a function which waits for submit event

const form = document.querySelector("form");
const weatherList = document.querySelector("#weather-list");
const city = document.querySelector('form input');


// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   addTask(input.value);
//   input.value = '';
// })


form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(city.value);

  const urlWithAccessKey = "http://api.weatherstack.com/current?access_key=10a73bd18b71d1ccae3dff7df84e3f99&query="

  const fullURL = urlWithAccessKey + city.value;
  
  fetch(fullURL)
    .then(response => response.json())
    .then(data => {
      let where = JSON.stringify(data.location.name);
      let feelsLike = JSON.stringify(data.current.feelslike);
      let forecast = where + " " + feelsLike;
      displayWeather(forecast);
      console.log(data)
    })
    .catch(err => console.log(err));
  
    city.value = " ";
})

displayWeather = (forecast) => {
  const aCityForecast = document.createElement('div');
  aCityForecast.innerText = forecast;
  weatherList.prepend(aCityForecast);
}

// Before I could hit API and was receiving no access key Notification
// then i got a CORS error 
// now i have fetch won't work (headers have been added)
    // method: "GET",
    // headers: {
    //   "?access_key": "10a73bd18b71d1ccae3dff7df84e3f99",
    //   "&query": city
    // }