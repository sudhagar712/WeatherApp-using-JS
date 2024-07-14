const apikey = "e1ea10bd725c4e691a480f7cd5347eb6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  const weatherIcon = document.querySelector(".weather-icon");

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${data.main.temp} °C`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
  document.querySelector(".Wind").innerHTML = `${data.wind.speed} KM/hr`;

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./weather-app-img/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./weather-app-img/images/clear.png";
  } else if (data.weather[0].main == "rain") {
    weatherIcon.src = "./weather-app-img/images/rain.png";
  } else if (data.weather[0].main == "drizzle") {
    weatherIcon.src = "./weather-app-img/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./weather-app-img/images/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
}

document.querySelector("button").addEventListener("click", () => {
  const city = document.querySelector("input").value;
  checkWeather(city);
});
