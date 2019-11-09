const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=48f3d6ddf180a630a454a5ec15eb0f4c&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}