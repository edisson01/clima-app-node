const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     });


// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);