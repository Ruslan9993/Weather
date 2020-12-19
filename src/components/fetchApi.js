import axios from "axios";

export const APIKEY = '7e974f5b6007509e9668715d15b66790';
export const city = '';

export const URL = `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=4&appid=${APIKEY}`;
export const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
export const rest = `&appid=${APIKEY}&units=imperial`;
export const getCity = async(city) => {
  try {
    const result = await axios.get(url + city + rest)
    .then(({data}) => data)

    return result;
  }

  catch(err) {
    console.log('Try again')
  }
}