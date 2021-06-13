const SECREAT_KEY = "G1GIAEIuN2wdr3ji1fNcTpQWFKAL6447";

const getWeather = async (key) => {
  // made https
  const url = "https://dataservice.accuweather.com/currentconditions/v1/";
  const params = `${key}?apikey=${SECREAT_KEY}`;

  const res = await fetch(url + params);
  const data = await res.json();
  return data[0];
};

const getCity = async (city) => {
  const url = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const queryParams = `?apikey=${SECREAT_KEY}&q=${city}`;

  const res = await fetch(url + queryParams);
  const data = await res.json();
  return data[0];
};
