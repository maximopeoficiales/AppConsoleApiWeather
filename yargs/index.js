const argvs = require("yargs")
  .options({
    direccion: {
      alias: "d",
      demand: true,
      desc: "Direccion a consultar el clima",
    },
  })
  .help().argv;

module.exports = {
  argvs,
};
