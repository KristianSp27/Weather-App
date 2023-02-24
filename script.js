let weather = {
  apiKey: "4b66041f5ffda23f98a9863174a2b62c",

  fetchWeather: function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid" + this.apiKey)
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector("city").innerText = "Weather in " + name;
  },
};
