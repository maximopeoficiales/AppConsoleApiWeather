const axios = require("axios");
const { API_KEY_OPENCAGE } = require("../config");
const getLatLongitude = async (city) => {
  const urlEncodedCity = encodeURI(city);
  const { data } = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json",
    {
      params: {
        q: urlEncodedCity,
        key: API_KEY_OPENCAGE,
        language: "es",
        pretty: 1,
        no_annotations: 1,
      },
    }
  );
  if (data.results.length == 0) {
    return new Error("No hay resultados");
  }
  const { geometry, formatted } = data.results[0];
  return {
    direccion: formatted,
    coordenadas: geometry,
  };
};

module.exports = { getLatLongitude };
