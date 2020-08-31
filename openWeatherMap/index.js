const { API_KEY_OPENWEATHERMAP } = require("../config");
const axios = require("axios");
const getWeather = async (lat, lon) => {
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat,
        lon,
        appid: API_KEY_OPENWEATHERMAP,
        units: "metric",
      },
    }
  );
  if (data.main.temp == undefined) {
    return new Error("No se pudo encontrar la temperatura");
  }
  const temperatura = data.main.temp;
  return {
    temperatura,
  };
};

module.exports = { getWeather };
