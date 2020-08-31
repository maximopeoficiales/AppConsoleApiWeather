const argvs = require("yargs")
  .options({
    direccion: {
      alias: "d",
      demand: true,
      desc: "Direccion a consultar el clima",
    },
    coordenadas: {
      alias: "c",
      desc: "Devuelve un objeto con datos incluidos las coordenadas",
    },
  })
  .help().argv;

module.exports = {
  argvs,
};
