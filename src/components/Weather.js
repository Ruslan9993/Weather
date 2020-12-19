/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useCallback } from 'react';
import { getCity } from './fetchApi';
import { flex } from './styles.css';

const SearchBar = React.lazy(() => import('./SearchBar'))

const Weather = () => {
  const [value, setValue] = useState('');
  const [weather, setWeather] = useState(null);
  const [info, setInfo] = useState('moscow');
  console.log('weather')
  
  const handleChange = useCallback(e =>{
    setValue(e.target.value)
  }, [])
  
  
   const handleClick = useCallback(() => {
    setInfo(value)
    setValue('')
    
  }, [value]) 

  const keyPress = useCallback(event => {
    if(event.key === 'Enter') {
      setInfo(value)
      setValue('')
    }
  }, [value])

  const size =(size, clr, ls) => {
    return {
      fontSize: size + 'px',
      margin: 0,
      padding: 0,
      color: clr,
      letterSpacing: ls + 'px',
      fontFamily: 'Helvetica, sans-serif'
    }
  }

  useEffect(() => {
    getCity(info)
    .then((data) => setWeather(data))
    
  }, [info])


 if(weather === undefined) {

  return( 
    <div>
      <SearchBar value={value} change={handleChange} click={handleClick} />
      <p style={size(20, 'red')}>Oops.. there isnt city like {info}</p>
       
    </div>
  )
}

const wh = weather === null ? (
  <React.Fragment>Loading...</React.Fragment>
) : (
  <React.Fragment>
     <React.Suspense fallback={<p>Loading...</p>}>
     <SearchBar press={keyPress} value={value.charAt(0).toUpperCase() + value.slice(1)} change={handleChange} click={handleClick} />
     </React.Suspense>
          <p style={size(35, 'blue')}>{weather.name}</p>
          <p style={size(13, 'white', 1)}>{weather.weather[0].description} </p>
          <img src={"http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"} />
          <p style={size(40, 'white')}>{((weather.main.temp - 32) * 0.55555555).toFixed(2)} &deg;C</p>
          <p style={size(40)}>Country: {weather.sys.country}</p>
          <p>Wind Speed: {(weather.wind.speed / 1.6).toFixed(2)} km/h</p>
  </React.Fragment>
  
    )

    return ( 
       
      <div style={flex}>{ wh }</div>
    )

   
  }
  
export default Weather;