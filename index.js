require("dotenv").config();
const { argvs } = require("./yargs");
const { getLatLongitude } = require("./openCage");
const { getWeather } = require("./openWeatherMap");
const direccion = argvs.direccion;
const myApp = async (direccion) => {
  try {
    let data = await getLatLongitude(direccion);
    let { lat, lng } = data.coordenadas;
    let temperatura = await getWeather(lat, lng);
    return `${data.direccion} tiene una temperatura de: ${temperatura.temperatura}°`;
  } catch (error) {
    return `No se pudo obtener informacion de: ${direccion}`;
  }
};
myApp(direccion).then(console.log).catch(console.log);
