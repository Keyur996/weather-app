const cityForm = document.querySelector("form.change-location");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const img = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = ({ cityDetails, cityWeather }) => {
  details.innerHTML = `<div class="text-muted text-uppercase text-center details">
                          <h5 class="my-3">${cityDetails.EnglishName}</h5>
                          <div class="my-3">${cityWeather.WeatherText}</div>
                          <div class="display-4 my-4">
                            <span>${cityWeather.Temperature.Metric.Value}</span>
                            <span>&deg;C</span>
                          </div>
                      </div>`;

  let timeSrc = cityWeather.IsDayTime ? "../img/day.svg" : "../img/night.svg";
  img.setAttribute("src", timeSrc);
  icon.setAttribute("src", `../img/icons/${cityWeather.WeatherIcon}.svg`);
  if (card.classList.contains("d-none")) card.classList.remove("d-none");
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const cityWeather = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    cityWeather,
  };
};

cityForm.addEventListener("submit", (e) => {
  //Prevent Default
  e.preventDefault();
  //get City from Form
  const city = cityForm.city.value.trim();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));

  cityForm.reset();
});
