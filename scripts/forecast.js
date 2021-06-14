class Forecast {
  constructor() {
    this.key = "G1GIAEIuN2wdr3ji1fNcTpQWFKAL6447";
    this.cityURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
    this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/";
  }


  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const cityWeather = await this.getWeather(cityDetails.Key);
    return { cityDetails, cityWeather };
  }

  async getCity(city) {
    const queryParams = `?apikey=${this.key}&q=${city}`;
    const res = await fetch(this.cityURI + queryParams);
    const data = await res.json();
    return data[0];
  }

  async getWeather(id) {
    const params = `${id}?apikey=${this.key}`;
    const res = await fetch(this.weatherURI + params);
    const data = await res.json();
    return data[0];
  }
}
