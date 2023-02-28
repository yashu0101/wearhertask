import "./weather.css";
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
  weather.innerHTML = `<h2>Loading...<h2>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json(url);
  return ShowWeather(data);
};

const ShowWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h2>City not found <h2>`;
    return;
  }
  weather.innerHTML = `
    <div> 
    <img />
    </div>
    <h2>${data.main.temp} </h2>     
    <h2>${data.weather[0].main} </h2>

    `;
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});

export default ShowWeather;
