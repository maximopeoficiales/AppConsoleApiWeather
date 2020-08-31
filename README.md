#### Aplicacion del clima y obtencion de coordenadas

Solo ejecutar este comando para instalar las dependencias

```
     npm i
```

Luego insertar sus api key de los siguientes servicios

[OpenCage](https://opencagedata.com/)
[Weather API](https://openweathermap.org/api)
```
API_KEY_OPENCAGE=
API_KEY_OPENWEATHERMAP=

```

Para consultar la temperatura escribir en la consola una vez dentro de la carpeta del proyecto

```
node . -d "Lima Peru"
//devolvera un mensaje como:
Lima, Perú tiene una temperatura de: 7.08°
```

Si quieren ver tambien las coordenadas

```
node . -d "Lima Peru" -c true
//devolvera un objeto como:
{
  direccion: 'Lima, Perú',
  coordenadas: { lat: -11.85, lng: -76.45 },
  temperatura: 7.08
}

```
